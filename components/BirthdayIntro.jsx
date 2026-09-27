"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

/**
 * BirthdayIntro
 * The very first thing Harshita sees: a dark, star-lit screen that
 * slowly reveals two lines of text, then a glowing button. Clicking the
 * button is the single user gesture that starts music and unlocks the
 * rest of the site — see onOpen in app/page.js.
 */
export default function BirthdayIntro({ onOpen }) {
  const [exiting, setExiting] = useState(false);

  const handleOpen = () => {
    setExiting(true);
    // Let the exit animation play before unmounting the intro
    setTimeout(onOpen, 900);
  };

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.15, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-deep"
        >
          <FloatingParticles variant="stars" count={70} />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-display text-3xl text-glow glow-text sm:text-4xl md:text-5xl"
            >
              Hey Harshita<span className="text-blush">...</span> ❤️
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="mt-4 font-body text-sm font-light text-glow/70 sm:text-base md:text-lg"
            >
              I made something special for you...
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.4 }}
              onClick={handleOpen}
              className="group relative mt-12 flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-7 py-3 font-body text-sm tracking-wide text-glow backdrop-blur-md transition-all hover:border-gold hover:bg-white/10 sm:text-base"
            >
              <Sparkles size={16} className="text-gold transition-transform group-hover:rotate-12" />
              Open Your Surprise
              <Sparkles size={16} className="text-gold transition-transform group-hover:-rotate-12" />
              <span className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="burst"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-deep"
        >
          {/* Particle-burst moment while transitioning into the main site */}
          {Array.from({ length: 26 }).map((_, i) => {
            const angle = (i / 26) * Math.PI * 2;
            const distance = 180 + Math.random() * 220;
            return (
              <motion.span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gold"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  opacity: 0,
                  scale: 0.3,
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
