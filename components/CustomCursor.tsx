"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      setIsPointer(Boolean(isClickable));
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <>
      {/* Outer Glowing Ring - z-index increased to 9999 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: isPointer ? 50 : 40,
          height: isPointer ? 50 : 40,
          scale: isPointer ? 1.2 : 1,
          borderColor: isPointer ? "rgba(6, 182, 212, 0.9)" : "rgba(6, 182, 212, 0.6)",
          backgroundColor: isPointer ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0.08)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Inner Core Dot - z-index increased to 9999 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 35 }}
      />
    </>
  );
}