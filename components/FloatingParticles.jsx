"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkle } from "lucide-react";

/**
 * FloatingParticles
 * A lightweight, decorative background layer of twinkling stars and/or
 * slowly drifting hearts. Pure CSS/JS animation — no images required.
 *
 * Props:
 *  - variant: "stars" | "hearts" | "both"
 *  - count: how many particles to render (kept modest for perf)
 */
export default function FloatingParticles({ variant = "stars", count = 40 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: variant === "hearts" ? 0 : count }).map((_, i) => ({
        id: `star-${i}`,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: 2.5 + Math.random() * 3,
      })),
    [variant, count]
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: variant === "stars" ? 0 : Math.round(count / 5) }).map(
        (_, i) => ({
          id: `heart-${i}`,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 10 + Math.random() * 8,
          size: 10 + Math.random() * 14,
          opacity: 0.15 + Math.random() * 0.25,
        })
      ),
    [variant, count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-glow animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-blush"
          style={{ left: `${h.left}%`, opacity: h.opacity, bottom: "-5%" }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-120vh", opacity: [0, h.opacity, h.opacity, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={h.size} fill="currentColor" strokeWidth={0} />
        </motion.div>
      ))}
    </div>
  );
}

/** Small inline sparkle used next to headings — exported for reuse */
export function InlineSparkle({ className = "" }) {
  return (
    <Sparkle className={`inline-block text-gold animate-twinkle ${className}`} size={18} />
  );
}
