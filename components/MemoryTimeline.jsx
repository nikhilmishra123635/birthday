"use client";

import { motion } from "framer-motion";
import { InlineSparkle } from "./FloatingParticles";

// Edit this list freely — add, remove, or reword any memory
const memories = [
  { title: "First Memories", note: "The day it all started." },
  { title: "Too Many Conversations 😂", note: "Hours that felt like minutes." },
  { title: "Endless Laughs", note: "Over the smallest, silliest things." },
  { title: "Random Plans", note: "Half of them never happened. Best half though." },
  { title: "Unforgettable Moments", note: "The ones we still bring up." },
  { title: "And Somehow... Here We Are ❤️", note: "Still going strong." },
];

export default function MemoryTimeline() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-20 text-center font-display text-3xl text-glow glow-text sm:text-5xl">
          Our Little Story <InlineSparkle />
        </h2>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block" />

          <div className="space-y-14">
            {memories.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div key={m.title} className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: left ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`w-full sm:w-[45%] ${left ? "sm:mr-auto sm:text-right" : "sm:ml-auto sm:text-left"}`}
                  >
                    <div className="glass rounded-2xl px-6 py-5">
                      <p className="font-display text-xl text-gold sm:text-2xl">{m.title}</p>
                      <p className="mt-1 font-body text-sm text-glow/60">{m.note}</p>
                    </div>
                  </motion.div>

                  {/* Node on the line */}
                  <span className="absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(233,196,106,0.8)] sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
