"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Exactly 0.7 seconds smooth entry/exit
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-widest uppercase font-mono">
          HASSAN <span className="text-green-500">BILAL</span>
        </h2>
        <p className="text-xs font-mono text-zinc-500 tracking-widest mt-2 uppercase">
          AI & DevOps Engineer
        </p>
      </motion.div>
    </motion.div>
  );
}