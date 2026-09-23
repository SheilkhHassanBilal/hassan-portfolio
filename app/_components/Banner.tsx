// components/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-cyan-500/30 backdrop-blur-md mb-8 shadow-lg shadow-cyan-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
          </span>
          <span className="text-xs md:text-sm font-medium text-cyan-300 tracking-wide">
            Available for Elite Engineering Opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-outfit text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Architecting High-Performance <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
            AI & Cloud Systems
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Hi, I&apos;m <strong className="text-white font-semibold">Hassan Bilal</strong> from <span className="text-neutral-200">Lahore, Pakistan</span>. Frontend Architect and Systems Engineer specializing in advanced n8n workflow automation, computer vision pipelines, and resilient cloud infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-200 font-semibold text-sm backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center gap-2"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Floating Tech Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'n8n Workflow Automation', icon: Cpu },
            { label: 'PyTorch & Computer Vision', icon: Sparkles },
            { label: 'Docker & AWS DevOps', icon: Code2 },
            { label: 'Next.js & TypeScript UI', icon: Cpu },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex items-center gap-3 text-left hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-neutral-300">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}