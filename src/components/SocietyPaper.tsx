"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export function SocietyPaper() {
  return (
    <div className="relative max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-[#fdfaf6] p-10 md:p-20 shadow-2xl border border-[#c5a059]/20 relative overflow-hidden"
      >
        {/* Background Paper Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none" />
        
        <div className="relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-1 border border-[#c5a059]/30 text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.5em]">
              Cronica Societății
            </div>
            <img
              src={withBasePath("/rings-illustration-tO3OeALU.png")}
              alt="Rings illustration"
              className="mx-auto w-32 md:w-40 h-auto"
            />
            <div className="w-24 h-[1px] bg-[#c5a059]/30 mx-auto" />
          </div>

          {/* Story Content */}
          <div className={`${cormorant.className} text-xl md:text-2xl text-[#4a5568] leading-relaxed space-y-10 text-left`}>
            <div className="space-y-4">
              <p className={`${playfair.className} text-2xl md:text-3xl italic text-[#1a365d]`}>
                Ei bine… dragi cititori,<br />
                chiar și cele mai mari povești încep uneori în cea mai desăvârșită liniște.
              </p>
            </div>

            <p>
              Totul a început într-o zi de vară - 16 iunie 2015, când două inimi au găsit curajul să meargă împreună.<br />
              Ceea ce părea o promisiune blândă s-a transformat, în taină, într-o iubire modelată de timp, râsete, încercări și nenumărate vise împărtășite.
            </p>

            <p>
              Iar acum, dragi cititori, secretul este dezvăluit:<br />
              o promisiune șoptită va deveni un legământ rostit, iar doi îndrăgostiți vor păși, cu grație și hotărâre, în căsătorie.
            </p>

            <p>
              Sunteți invitați să fiți martorii unei iubiri asumate, cultivate și, mai presus de toate, destinate să dăinuie.<br />
             
            </p>

            <p>
              Nu lipsiți, căci asemenea povești nu se spun des…<br />
              și cu siguranță nu se repetă.
            </p>
          </div>

          {/* Footer/Signature */}
          <div className="pt-12 text-left space-y-6">
            <div className="w-16 h-[1px] bg-[#c5a059]/30 mx-auto" />
            <p className="text-[#4a5568] italic text-lg md:text-xl">Cu discreție, eleganță și un strop de încântare,</p>
            <div className={`${playfair.className} text-3xl md:text-5xl text-[#c5a059] uppercase tracking-[0.2em] pt-2`}>
              Sebastian & Marina
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-[#c5a059]/20" />
        <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#c5a059]/20" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[#c5a059]/20" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-[#c5a059]/20" />
        
        {/* Subtle inner border */}
        <div className="absolute inset-4 border border-[#c5a059]/5 pointer-events-none" />
      </motion.div>
    </div>
  );
}
