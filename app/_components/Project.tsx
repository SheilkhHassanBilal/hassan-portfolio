// components/Projects.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Workflow, Layout, Sparkles } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Enterprise n8n Autonomous Workflow Engine',
    category: 'Automation',
    description: 'Multi-step automated pipeline utilizing advanced webhooks, custom JavaScript execution nodes, and REST/GraphQL integrations to streamline real-time data synchronization.',
    tags: ['n8n', 'Webhooks', 'REST APIs', 'TypeScript'],
    metrics: '99.9% Uptime • 50k+ Events/Day',
    icon: Workflow,
    github: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
    live: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
  },
  {
    id: 2,
    title: 'Medical Imaging Segmentation with MONAI & PyTorch',
    category: 'AI Systems',
    description: 'Deep learning computer vision system leveraging PyTorch, SimpleITK, and MONAI for high-precision 3D medical image segmentation inside Google Colab environments.',
    tags: ['PyTorch', 'MONAI', 'OpenCV', 'Python'],
    metrics: '94.8% Dice Score Accuracy',
    icon: Cpu,
    github: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
    live: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
  },
  {
    id: 3,
    title: 'Immersive Next.js 14 Glassmorphism Portfolio',
    category: 'Web Development',
    description: 'High-end personal portfolio featuring buttery-smooth Framer Motion page animations, responsive mobile navigation drawers, and bespoke dark-mode UI styling.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    metrics: '100 Lighthouse Performance',
    icon: Layout,
    github: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
    live: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
  },
  {
    id: 4,
    title: 'Real-time Computer Vision Object Tracking',
    category: 'AI Systems',
    description: 'OpenCV-powered video stream processing pipeline optimized for edge devices, featuring real-time motion detection and automated event webhook triggers.',
    tags: ['OpenCV', 'Python', 'Docker', 'AWS'],
    metrics: '60 FPS Real-time Processing',
    icon: Sparkles,
    github: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
    live: 'https://www.linkedin.com/in/hassan-bilal-6aa19235b/',
  },
];

const categories = ['All', 'Automation', 'AI Systems', 'Web Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Featured Work
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Crafted Systems & Applications
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:shadow-2xl hover:shadow-cyan-500/5 relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300">
                      {project.metrics}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}