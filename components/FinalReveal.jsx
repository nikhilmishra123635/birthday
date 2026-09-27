"use client";

import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

export default function FinalReveal() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <FloatingParticles variant="stars" count={45} />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-3xl text-glow glow-text sm:text-5xl"
      >
        Happy Birthday Harshita ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 font-body text-lg leading-relaxed text-glow/70 sm:text-xl"
      >
        Keep smiling.
        <br />
        Keep shining.
        <br />
        Keep being YOU.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-14 font-body text-xs uppercase tracking-[0.3em] text-glow/40"
      >
        Made with ❤️ just for you
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-4 font-script text-3xl text-gold sm:text-4xl"
      >
        — Your Best Friend
      </motion.p>
    </section>
  );
}
