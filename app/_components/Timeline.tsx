"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI & DevOps Engineer",
    company: "Freelance & Independent Projects",
    period: "2024 - Present",
    description: "Developing end-to-end computer vision models, automating deployment pipelines using Docker and AWS, and building modern web solutions."
  },
  {
    role: "BS Computer Science",
    company: "Lahore Garrison University",
    period: "Graduated",
    description: "Built strong foundations in core computer science, software engineering, algorithms, and machine learning architectures."
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] text-white border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-500 font-mono text-sm tracking-widest uppercase">// Career Path</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-2">Experience & Education</h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-green-500 group-hover:bg-green-500 transition-colors"></div>
              
              <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold mt-3 text-white">{exp.role}</h3>
              <h4 className="text-sm font-mono text-zinc-400 mt-1">{exp.company}</h4>
              <p className="text-zinc-400 mt-4 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}