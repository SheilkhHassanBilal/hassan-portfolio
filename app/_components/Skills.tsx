// components/Skills.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Brain, Server, Layout, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Workflow & Automation',
    description: 'Advanced automated orchestration and API integrations.',
    icon: Workflow,
    skills: ['n8n Multi-step Pipelines', 'Webhooks & Event Triggers', 'REST & GraphQL APIs', 'JSON Data Transformations', 'Task Queue Management'],
  },
  {
    title: 'AI & Computer Vision',
    description: 'Intelligent model training and image processing.',
    icon: Brain,
    skills: ['PyTorch', 'OpenCV', 'SimpleITK', 'MONAI', 'Google Colab Environments'],
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    description: 'Scalable deployment and containerization.',
    icon: Server,
    skills: ['Docker & Containerization', 'AWS Cloud Services', 'Git Version Control', 'Linux Server Management', 'CI/CD Pipelines'],
  },
  {
    title: 'Web Design & Development',
    description: 'Immersive, responsive user interfaces.',
    icon: Layout,
    skills: ['Next.js 14+ (App Router)', 'TypeScript & JavaScript', 'Tailwind CSS & Glassmorphism', 'Framer Motion Animations', 'Responsive UI/UX Engineering'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative bg-white/[0.01] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Technical Expertise
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Bento Grid of Specialized Skills
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            A comprehensive overview of the core technologies, frameworks, and engineering tools I utilize to build elite systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-neutral-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-300 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}