// components/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Layers, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Terminal className="w-3.5 h-3.5" /> Professional Engineering Profile
            </div>
            
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineering robust digital experiences & intelligent backend pipelines.
            </h2>
            
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-normal">
              Graduating with a <strong className="text-white font-medium">Bachelor of Science in Computer Science (BSCS)</strong> from <span className="text-neutral-200">Lahore Garrison University</span>, I combine meticulous frontend craftsmanship with deep expertise in system automation and AI workflows. 
            </p>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-normal">
              Whether architecting modular Next.js interfaces, building advanced computer vision diagnostic systems with PyTorch and MONAI, or orchestrating complex multi-step n8n webhooks, I focus relentlessly on clean architecture, performance, and scalability.
            </p>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              {
                title: 'Clean Architecture',
                desc: 'Type-safe, modular, and maintainable codebase using TypeScript and Next.js App Router.',
                icon: Layers,
              },
              {
                title: 'AI & Vision Models',
                desc: 'Custom model training and deployment with PyTorch, OpenCV, SimpleITK, and MONAI.',
                icon: Cpu,
              },
              {
                title: 'Workflow Automation',
                desc: 'Enterprise-grade automation pipelines using n8n, webhooks, and REST/GraphQL APIs.',
                icon: Terminal,
              },
              {
                title: 'Cloud & DevOps',
                desc: 'Containerized deployments with Docker, AWS cloud infrastructure, and Linux environments.',
                icon: ShieldCheck,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all group hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}