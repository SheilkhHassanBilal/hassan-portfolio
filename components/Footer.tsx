// components/Footer.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle2, Terminal, Loader2 } from 'lucide-react';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    // Yeh aapka naya Access Key hai
    formData.append("access_key", "ea242eb6-d94c-4394-9e4e-14494b638562");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setLoading(false);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-6 bg-white/[0.01] border-t border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
                Get In Touch
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Let&apos;s Build Something Extraordinary Together.
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                Have a challenging systems engineering project, AI computer vision initiative, or workflow automation requirement? Reach out directly or send a message below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Direct Email</span>
                  <a href="mailto:sheikhhassan5859@gmail.com" className="text-white font-semibold text-sm hover:text-cyan-400 transition-colors">
                    sheikhhassan5859@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Location</span>
                  <span className="text-white font-semibold text-sm">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Github, href: 'https://github.com/SheilkhHassanBilal', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/', label: 'LinkedIn' },
                { icon: MessageCircle, href: 'https://wa.me/923264780889', label: 'WhatsApp' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/40 backdrop-blur-xl transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I will review your inquiry and get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project Inquiry / Engineering Opportunity"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="Describe your project requirements or system architecture goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-outfit font-bold text-white tracking-wider">HASSAN BILAL</span>
          </div>
          <p>© {new Date().getFullYear()} Hassan Bilal. Designed & Engineered with precision in Lahore, Pakistan.</p>
        </div>

      </div>
    </footer>
  );
}