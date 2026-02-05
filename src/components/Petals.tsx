"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Petals() {
  const [petals, setPetals] = useState<{ id: number; x: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 10 + Math.random() * 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: `${petal.x}%`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "110vh", 
            x: [`${petal.x}%`, `${petal.x + (Math.random() * 10 - 5)}%`, `${petal.x}%`],
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: petal.size, height: petal.size }}
          className="absolute"
        >
          <svg viewBox="0 0 100 100" fill="#fbcfe8" className="opacity-40">
            <path d="M50 0 C60 40 100 50 50 100 C0 50 40 40 50 0" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
