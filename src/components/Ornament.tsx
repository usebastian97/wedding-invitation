"use client";

import { motion } from "framer-motion";

export function FloralBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 border-t-4 border-l-4 border-[#c5a059] rounded-tl-3xl m-4 md:m-8"
      >
        <div className="absolute -top-2 -left-2 text-[#c5a059]">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C60 20 80 20 100 30 C80 40 60 40 50 60 C40 40 20 40 0 30 C20 20 40 20 50 0" />
          </svg>
        </div>
      </motion.div>

      {/* Top Right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 border-t-4 border-r-4 border-[#c5a059] rounded-tr-3xl m-4 md:m-8"
      >
        <div className="absolute -top-2 -right-2 text-[#c5a059]">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" transform="rotate(90)">
            <path d="M50 0 C60 20 80 20 100 30 C80 40 60 40 50 60 C40 40 20 40 0 30 C20 20 40 20 50 0" />
          </svg>
        </div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 border-b-4 border-l-4 border-[#c5a059] rounded-bl-3xl m-4 md:m-8"
      >
        <div className="absolute -bottom-2 -left-2 text-[#c5a059]">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-90)">
            <path d="M50 0 C60 20 80 20 100 30 C80 40 60 40 50 60 C40 40 20 40 0 30 C20 20 40 20 50 0" />
          </svg>
        </div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 border-b-4 border-r-4 border-[#c5a059] rounded-br-3xl m-4 md:m-8"
      >
        <div className="absolute -bottom-2 -right-2 text-[#c5a059]">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" transform="rotate(180)">
            <path d="M50 0 C60 20 80 20 100 30 C80 40 60 40 50 60 C40 40 20 40 0 30 C20 20 40 20 50 0" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-[1px] w-12 md:w-24 bg-[#c5a059]" />
      <div className="mx-4 text-[#c5a059]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13 5 16 8 22 12C16 16 13 19 12 22C11 19 8 16 2 12C8 8 11 5 12 2Z" />
        </svg>
      </div>
      <div className="h-[1px] w-12 md:w-24 bg-[#c5a059]" />
    </div>
  );
}
