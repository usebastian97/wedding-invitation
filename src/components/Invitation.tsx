"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import { FloralBorder, Divider } from "./Ornament";
import { Petals } from "./Petals";
import { SocietyPaper } from "./SocietyPaper";
import { Calendar, MapPin, Music } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    zile: 0,
    ore: 0,
    minute: 0,
    secunde: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        return { zile: 0, ore: 0, minute: 0, secunde: 0 };
      }

      return {
        zile: Math.floor(distance / (1000 * 60 * 60 * 24)),
        ore: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minute: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secunde: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="max-w-xl mx-auto"
    >
      <div className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold mb-8 text-center">Până la Clipă Mult Așteptată</div>
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center space-y-1">
            <div className={`${playfair.className} text-3xl md:text-5xl text-[#1a365d] font-light`}>
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
              {label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DetailCard({ icon, title, details, subDetails, delay }: { icon: React.ReactNode, title: string, details: string, subDetails: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="space-y-4 p-8 group hover:bg-[#fdfaf6] transition-colors rounded-sm"
    >
      <div className="flex justify-center text-[#c5a059] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="uppercase tracking-[0.2em] text-xs font-bold text-[#c5a059]">{title}</h3>
      <div className={`${playfair.className} text-2xl text-[#1a365d]`}>{details}</div>
      <div className="text-sm text-[#4a5568] italic">{subDetails}</div>
    </motion.div>
  );
}

function ProgramItem({ time, activity, delay }: { time: string, activity: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex items-center space-x-8 py-6 border-b border-[#c5a059]/20 group"
    >
      <div className={`${playfair.className} text-2xl md:text-3xl text-[#c5a059] w-24 md:w-32 flex-shrink-0 group-hover:scale-110 transition-transform`}>
        {time}
      </div>
      <div className="flex-grow">
        <div className="text-xl md:text-2xl text-white uppercase tracking-widest">{activity}</div>
      </div>
    </motion.div>
  );
}

export function Invitation() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let didCancel = false;

    const tryAutoplay = () => {
      audio
        .play()
        .then(() => {
          if (!didCancel) setIsMuted(false);
        })
        .catch(() => {
          if (!didCancel) setIsMuted(true);
        });
    };

    tryAutoplay();

    return () => {
      didCancel = true;
    };
  }, []);

  const handleAudioToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          setIsMuted(true);
        });
    } else {
      audio.pause();
      setIsMuted(true);
    }
  };

  return (
    <main className={`${cormorant.className} min-h-screen relative overflow-x-hidden selection:bg-[#c5a059] selection:text-white bg-[#fdfaf6]`}>
      <FloralBorder />
      <Petals />

      <audio
        ref={audioRef}
        src={withBasePath("/Cheap%20Thrills%20-%20Release.mp3")}
        preload="auto"
        onEnded={() => setIsMuted(true)}
      />
      
      {/* Sound Toggle */}
      <button 
        onClick={handleAudioToggle}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/80 backdrop-blur shadow-md text-[#c5a059] border border-[#c5a059]/20 hover:scale-110 transition-transform active:scale-95"
        aria-label={isMuted ? "Play music" : "Pause music"}
      >
        {isMuted ? <Music className="w-5 h-5 opacity-40" /> : <Music className="w-5 h-5 animate-pulse" />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/Gemini_Generated_Image_5kubfe5kubfe5kub-resized-1770299721566.webp?width=8000&height=8000&resize=contain" 
              alt="Wedding Couple"
              className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-3xl text-center space-y-2 relative z-10 mt-40 md:mt-0"
          >
            <div className="space-y-2">
           
              <div className="mt-12 md:mt-0">
                <Divider />
              </div>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed italic">
               "Într-o lume a regulilor și aparențelor, NOI am ales ceea ce nu se negociază: IUBIREA."
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-6 flex flex-col items-center"
            >
                <div className="text-2xl md:text-3xl font-medium text-white mb-2 uppercase tracking-widest">
                  Sebastian & Marina
                </div>
              <div className="text-[#c5a059] text-lg italic mb-4">
                Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.
              </div>
            
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 z-10"
        >
          <div className="w-[1px] h-12 bg-[#c5a059]" />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative border-y border-[#c5a059]/20 overflow-hidden">
        {/* Floral Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 opacity-40 pointer-events-none select-none z-0">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/floral-border-J4FzR5M8-1770301965596.png?width=8000&height=8000&resize=contain" 
            alt="" 
            className="w-full h-full object-cover scale-x-[-1]"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 opacity-40 pointer-events-none select-none z-0">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/floral-border-J4FzR5M8-1770301965596.png?width=8000&height=8000&resize=contain" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 text-center mb-16">
            <DetailCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Cand?"
              details="Duminca, 05 Iulie 2026"
              subDetails="Incepand cu ora 19:00"
              delay={0.2}
            />
            <DetailCard 
              icon={<MapPin className="w-6 h-6" />}
              title="Unde?"
              details="Hilston Ballroom"
              subDetails="Slatina, Olt, Romania"
              delay={0.4}
            />
          </div>
          
          <div className="pt-8 border-t border-[#c5a059]/10">
            <CountdownTimer targetDate="2026-07-05T16:00:00" />
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-6 bg-white/50 backdrop-blur-sm relative border-y border-[#c5a059]/20 overflow-hidden">
        {/* Floral Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 opacity-40 pointer-events-none select-none z-0">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/floral-border-J4FzR5M8-1770301965596.png?width=8000&height=8000&resize=contain" 
            alt="" 
            className="w-full h-full object-cover scale-x-[-1]"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 opacity-40 pointer-events-none select-none z-0">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/floral-border-J4FzR5M8-1770301965596.png?width=8000&height=8000&resize=contain" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <SocietyPaper />
        </div>
      </section>

      {/* Wedding Program & Invitation Section */}
      <section id="program" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/bridge-1-1770304983369.jpg?width=8000&height=8000&resize=contain" 
            alt="Wedding Illustration"
            className="w-full h-full object-cover brightness-[0.25] contrast-[1.1]"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-medium">Desfășurarea Zilei</span>
            <h2 className={`${playfair.className} text-4xl md:text-6xl text-white`}>Programul Nunții</h2>
            <div className="w-24 h-[1px] bg-[#c5a059] mx-auto opacity-50" />
          </motion.div>

          <div className="space-y-2 mb-20">
            <ProgramItem time="16:00" activity="Ceremonia Religioasă" delay={0.2} />
            <ProgramItem time="18:30" activity="Cocktail de Bun Venit" delay={0.4} />
            <ProgramItem time="19:30" activity="Petrecerea & Cina" delay={0.6} />
            <ProgramItem time="21:00" activity="Dansul mirilor & Momentul special" delay={.8}/>
            <ProgramItem time="00:00" activity="Tortul & Șampania" delay={1} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
             
              <div className="flex flex-col items-center">
                <a 
                  href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/bridge-1-1770304983369.jpg" 
                  download="Invitation_Sebastian_Marina.png"
                  className="px-10 py-4 bg-[#c5a059] text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#b08d4a] transition-all transform hover:scale-105 shadow-xl rounded-sm"
                >
                  Descarca invitația
                </a>
              </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-white/10">
              <p className="text-white/80 text-lg md:text-xl italic font-light max-w-md mx-auto">
                "Ne-ar face o deosebită plăcere să vă avem alături. Vă rugăm să confirmați prezența"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-[#c5a059] text-[10px] uppercase tracking-widest font-bold">Confirmare Sebastian</div>
                  <div className="text-white text-2xl font-light tracking-widest">0766 877 423</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[#c5a059] text-[10px] uppercase tracking-widest font-bold">Confirmare Marina</div>
                  <div className="text-white text-2xl font-light tracking-widest">07xx xxx xxx</div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold border border-[#c5a059]/30 inline-block px-6 py-2">
                  Vă rugăm să confirmați până la 1 Iunie 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#c5a059]/10 bg-white/30">
        <div className={`${playfair.className} text-[#c5a059] text-2xl mb-2`}>S & M</div>
        <p className="text-sm text-[#4a5568]/60 uppercase tracking-widest">Est. 2015</p>
      </footer>
    </main>
  );
}
