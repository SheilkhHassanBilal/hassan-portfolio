import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
              06 / GET IN TOUCH
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none">
              LET&apos;S <br />
              <span className="text-neutral-500">BUILD.</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            I am currently available for software engineering, Python development, AI automation, and DevOps roles or collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <a
            href="mailto:contact@hassanbilal.dev"
            className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block">DIRECT EMAIL</span>
                <span className="text-sm font-semibold text-white">hassan@bilal.dev</span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block">GITHUB</span>
                <span className="text-sm font-semibold text-white">View Repositories</span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block">LINKEDIN</span>
                <span className="text-sm font-semibold text-white">Professional Profile</span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}