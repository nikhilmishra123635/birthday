"use client";

import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const subLines = [
  "To my best friend,",
  "my favourite person to annoy,",
  "and one of the most special people in my life.",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <FloatingParticles variant="both" count={50} />

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="font-display text-4xl leading-tight text-glow glow-text sm:text-6xl md:text-7xl"
      >
        Happy Birthday,
        <br />
        <span className="gold-glow text-gold">Harshita</span> ❤️
      </motion.h1>

      <div className="mt-8 max-w-xl space-y-2">
        {subLines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.35 }}
            className="font-body text-base font-light text-glow/75 sm:text-lg"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2.4, repeat: Infinity } }}
        className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-glow/40"
      >
        scroll
      </motion.div>
    </section>
  );
}
