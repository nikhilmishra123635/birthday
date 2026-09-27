"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkle, Star, Circle } from "lucide-react";

const shapes = [Heart, Sparkle, Star, Circle];
const colors = ["#e9c46a", "#f3b6d3", "#fdf8f2", "#c9a6f0"];

/**
 * Confetti
 * A restrained, elegant confetti burst — not the childish rainbow kind.
 * Renders once when `active` becomes true and fades out on its own.
 */
export default function Confetti({ active = false, count = 60 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const Shape = shapes[i % shapes.length];
        return {
          id: i,
          Shape,
          left: Math.random() * 100,
          delay: Math.random() * 1.2,
          duration: 3 + Math.random() * 2.5,
          size: 10 + Math.random() * 12,
          color: colors[i % colors.length],
          rotate: Math.random() * 360,
        };
      }),
    [count]
  );

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute -top-10"
          style={{ left: `${p.left}%`, color: p.color }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
        >
          <p.Shape size={p.size} fill="currentColor" strokeWidth={0.5} />
        </motion.span>
      ))}
    </div>
  );
}
