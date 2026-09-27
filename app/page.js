"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BirthdayIntro from "@/components/BirthdayIntro";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import MemoryTimeline from "@/components/MemoryTimeline";
import SpecialMessage from "@/components/SpecialMessage";
import SurpriseGift from "@/components/SurpriseGift";
import FinalReveal from "@/components/FinalReveal";
import Confetti from "@/components/Confetti";

export default function Home() {
  const [introOpen, setIntroOpen] = useState(true);
  const [surpriseDone, setSurpriseDone] = useState(false);
  const musicRef = useRef(null);

  // Called from the intro's "Open Your Surprise" button. This click IS the
  // user gesture browsers require before audio can play — so music starts
  // here, synchronously with the click, never on page load.
  const handleOpen = () => {
    musicRef.current?.play();
    setIntroOpen(false);
  };

  const handleGiftOpen = () => {
    musicRef.current?.setVolume(0.75);
  };

  const handleGiftComplete = () => {
    setSurpriseDone(true);
    musicRef.current?.setVolume(0.55);
  };

  return (
    <main className="relative min-h-screen bg-midnight">
      {introOpen && <BirthdayIntro onOpen={handleOpen} />}

      <MusicPlayer ref={musicRef} />
      <Confetti active={surpriseDone} count={70} />

      <AnimatePresence>
        {!introOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <PhotoGallery />
            <MemoryTimeline />
            <SpecialMessage />
            <SurpriseGift onOpen={handleGiftOpen} onComplete={handleGiftComplete} />

            {surpriseDone ? (
              <FinalReveal />
            ) : (
              <div className="flex min-h-[30vh] items-center justify-center px-6 text-center">
                <p className="font-body text-sm text-glow/40">
                  Open the surprise above to see the rest ✨
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
