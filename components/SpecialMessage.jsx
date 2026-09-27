"use client";

import { motion } from "framer-motion";

// Edit this freely — each entry becomes its own animated line/paragraph
const messageLines = [
  "Harshita,",
  "Life gives us many people,\nbut only a few become memories.",
  "You've been one of those rare people\nwho can make an ordinary day feel special.",
  "Thank you for all the laughs,\nthe random conversations,\nthe crazy moments,\nand simply being you.",
  "I hope this year brings you\neverything you've wished for,\nmore reasons to smile,\nmore adventures,\nand countless beautiful memories.",
  "Stay exactly the way you are.",
  "Happy Birthday, Harshita. ❤️",
];

export default function SpecialMessage() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 font-display text-3xl text-glow glow-text sm:text-5xl"
        >
          Something I Want You To Know...
        </motion.h2>

        <div className="space-y-7">
          {messageLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.05 }}
              className="whitespace-pre-line font-script text-2xl leading-relaxed text-blush sm:text-3xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
