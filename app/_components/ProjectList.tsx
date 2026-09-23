"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI AUTOMATION & WORKFLOW PIPELINE",
    category: "Python · AI · APIs · n8n",
    description: "An intelligent multi-step workflow automation system designed to process data streams, integrate external LLM APIs, and execute automated backend tasks seamlessly.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    number: "02",
    title: "CONTAINERIZED BACKEND MICROSERVICE",
    category: "Python · Docker · REST APIs · DevOps",
    description: "A robust scalable backend server architecture built with clean Python principles, fully containerized with Docker, and optimized for reliable cloud deployment.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    number: "03",
    title: "AI / LLM INTEGRATION SUITE",
    category: "Python · LangChain · OpenAI API · Vector DB",
    description: "Custom integration layer connecting advanced language models to internal data repositories for context-aware query processing and intelligent automation.",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

export default function ProjectList() {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 bg-[#0a0a0a] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
              05 / FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected engineering works <br />
              <span className="text-neutral-500">& technical systems.</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            High-impact software projects focusing on Python development, AI pipelines, and DevOps infrastructure.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-neutral-500 pt-1">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-2">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-neutral-300 hover:text-white"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-neutral-300 hover:text-white"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed max-w-4xl mb-8">
                {project.description}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                <span>VIEW REPOSITORY & DETAILS</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}