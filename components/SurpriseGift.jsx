"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

/**
 * SurpriseGift
 * The "one last surprise" moment: a button that opens a full-screen
 * sequence — dark screen, glowing gift box, an explosion of hearts,
 * then the final two reveal lines. Calls onComplete() once the
 * sequence finishes so the parent page can launch confetti and show
 * the final screen.
 *
 * Props:
 *  - onComplete: () => void
 *  - onOpen: () => void  (optional — e.g. to bump music volume)
 */
const STAGES = {
  IDLE: "idle",
  DARK: "dark",
  BOX: "box",
  OPENING: "opening",
  BURST: "burst",
  REVEAL: "reveal",
};

export default function SurpriseGift({ onComplete, onOpen }) {
  const [stage, setStage] = useState(STAGES.IDLE);

  const startSequence = () => {
    onOpen?.();
    setStage(STAGES.DARK);
  };

  useEffect(() => {
    if (stage === STAGES.DARK) {
      const t = setTimeout(() => setStage(STAGES.BOX), 700);
      return () => clearTimeout(t);
    }
    if (stage === STAGES.BOX) {
      const t = setTimeout(() => setStage(STAGES.OPENING), 1400);
      return () => clearTimeout(t);
    }
    if (stage === STAGES.OPENING) {
      const t = setTimeout(() => setStage(STAGES.BURST), 900);
      return () => clearTimeout(t);
    }
    if (stage === STAGES.BURST) {
      const t = setTimeout(() => setStage(STAGES.REVEAL), 1100);
      return () => clearTimeout(t);
    }
    if (stage === STAGES.REVEAL) {
      const t = setTimeout(() => onComplete?.(), 4200);
      return () => clearTimeout(t);
    }
  }, [stage, onComplete]);

  const overlayOpen = stage !== STAGES.IDLE;

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h2 className="font-display text-3xl text-glow glow-text sm:text-5xl">One More Thing...</h2>
      <p className="mt-3 max-w-md font-body text-sm text-glow/60 sm:text-base">
        There&apos;s one last surprise waiting for you.
      </p>

      <motion.button
        onClick={startSequence}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="group relative mt-10 flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-8 py-4 font-body text-base text-glow backdrop-blur-md animate-glowPulse"
      >
        <Gift size={18} className="text-gold" />
        One Last Surprise 🎁
      </motion.button>

      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-deep"
          >
            {/* Ambient stars during the whole sequence */}
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-glow animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: "2px",
                  height: "2px",
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}

            {(stage === STAGES.BOX || stage === STAGES.OPENING) && (
              <motion.div
                initial={{ scale: 0, rotate: -8 }}
                animate={{
                  scale: 1,
                  rotate: stage === STAGES.OPENING ? [0, -6, 6, -3, 0] : 0,
                }}
                transition={{ duration: stage === STAGES.OPENING ? 0.9 : 0.6, ease: "easeOut" }}
                className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-plum to-plum-light shadow-[0_0_60px_rgba(233,196,106,0.45)] sm:h-36 sm:w-36"
              >
                <Gift size={54} className="text-gold" />
              </motion.div>
            )}

            {stage === STAGES.BURST && (
              <div className="relative flex h-40 w-40 items-center justify-center">
                {Array.from({ length: 36 }).map((_, i) => {
                  const angle = (i / 36) * Math.PI * 2;
                  const distance = 140 + Math.random() * 220;
                  const isHeart = i % 2 === 0;
                  return (
                    <motion.span
                      key={i}
                      className="absolute"
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
                      animate={{
                        x: Math.cos(angle) * distance,
                        y: Math.sin(angle) * distance,
                        opacity: 0,
                        scale: 1,
                      }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      {isHeart ? (
                        <Heart size={14} className="text-blush" fill="currentColor" strokeWidth={0} />
                      ) : (
                        <Sparkles size={14} className="text-gold" />
                      )}
                    </motion.span>
                  );
                })}
              </div>
            )}

            {stage === STAGES.REVEAL && (
              <div className="max-w-xl px-6 text-center">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="font-display text-2xl text-glow glow-text sm:text-4xl"
                >
                  You&apos;re not just my best friend...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="mt-5 font-display text-2xl text-gold sm:text-4xl"
                >
                  You&apos;re one of the most beautiful chapters
                  <br />
                  of my life. ❤️
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.4 }}
                  className="mt-8 font-display text-3xl text-glow glow-text sm:text-5xl"
                >
                  Happy Birthday, Harshita! 🎂✨
                </motion.p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
