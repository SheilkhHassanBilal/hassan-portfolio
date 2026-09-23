// components/Experience.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    type: 'experience',
    title: 'Senior Systems & Automation Engineer',
    organization: 'Independent Tech Consultant & Systems Architect',
    location: 'Lahore, Pakistan',
    period: '2024 — Present',
    description: 'Architecting enterprise n8n workflow automation pipelines, custom REST/GraphQL API integrations, and containerized deployment infrastructures using Docker and AWS.',
  },
  {
    type: 'experience',
    title: 'AI & Computer Vision Developer',
    organization: 'Computer Vision Research & Development',
    location: 'Lahore, Pakistan',
    period: '2023 — 2024',
    description: 'Developed and trained image segmentation models using PyTorch, OpenCV, SimpleITK, and MONAI within Google Colab environments for high-precision data processing.',
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science (BSCS)',
    organization: 'Lahore Garrison University',
    location: 'Lahore, Pakistan',
    period: 'Graduated',
    description: 'Completed rigorous foundational coursework in algorithms, data structures, software architecture, operating systems, and advanced artificial intelligence.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative bg-white/[0.01] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Chronological Timeline
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Experience & Education
          </h2>
          <p className="text-neutral-400 text-base">
            A track record of academic excellence at Lahore Garrison University and professional engineering milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0a0a0c] border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                    <MapPin className="w-3.5 h-3.5" /> {item.location}
                  </span>
                </div>

                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <h4 className="text-sm font-semibold text-cyan-400 mb-4">
                  {item.organization}
                </h4>

                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}