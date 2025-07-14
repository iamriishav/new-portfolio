import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Loader2, Send, CheckCircle2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    try {
      const response = await fetch("https://getform.io/f/b62f13c8-b83c-471f-9e18-40359e5186f2", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-50px" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rajakrishav395@gmail.com",
      subtitle: "Drop me a line",
      href: "mailto:rajakrishav395@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 94727 42873",
      subtitle: "Give me a call",
      href: "tel:+919472742873",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bangalore, India",
      subtitle: "Come say hello",
      href: null,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Rishav Kumar Rajak",
      subtitle: "Let's connect",
      href: "https://linkedin.com/in/iamriishav",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const socialLinks = [];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? I'm here to help you build amazing digital experiences. 
            Let's discuss your project and make it happen together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Have a project in mind? Let's discuss how we can work together to create something amazing.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{info.subtitle}</p>
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{info.content}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{info.subtitle}</p>
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{info.content}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl w-full flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  className="text-center py-16 flex-1 flex flex-col justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col justify-center"
                >
                  <input type="hidden" name="_gotcha" />
                  
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Send Message</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        minLength={2}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      minLength={5}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help you..."
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px] max-h-[180px] resize-none"
                      required
                      minLength={10}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
