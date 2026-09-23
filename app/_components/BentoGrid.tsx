"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section id="capabilities" className="py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-500 font-mono text-sm tracking-widest uppercase">// Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-2">Core Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4">End-to-End AI & Computer Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              Designing and training advanced neural networks, image segmentation models (UNet), and computer vision pipelines using PyTorch, OpenCV, MONAI, and Google Colab for real-world automated intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4">Cloud & DevOps</h3>
            <p className="text-zinc-400 leading-relaxed">
              Building scalable cloud infrastructure, managing AWS environments, containerizing applications with Docker, and setting up reliable deployment workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4">Modern Tech Stack</h3>
            <p className="text-zinc-400 leading-relaxed">
              Leveraging Next.js, TypeScript, and Tailwind CSS to build high-performance, lightning-fast web applications and developer tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4">Scalable Systems Architecture</h3>
            <p className="text-zinc-400 leading-relaxed">
              Bridging the gap between raw machine learning research and robust production-ready cloud architectures to deliver seamless, high-availability software solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}