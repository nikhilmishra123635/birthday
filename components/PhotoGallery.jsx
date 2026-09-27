"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { InlineSparkle } from "./FloatingParticles";

/**
 * Drop your photos into /public/images/ using these exact filenames
 * (or edit the array below to match whatever you used):
 *   photo1.jpg ... photo8.jpg
 */
const photos = [
  { src: "/images/1.jpeg", caption: "Some memories are impossible to forget ❤️", size: "large" },
  { src: "/images/2.jpeg", caption: "Some people make ordinary moments special.", size: "small" },
  { src: "/images/3.jpeg", caption: "Endless laughs, zero regrets.", size: "small" },
  { src: "/images/4.jpeg", caption: "Just another perfect random day.", size: "medium" },
  { src: "/images/5.jpeg", caption: "This one still makes me smile.", size: "small" },
  { src: "/images/6.jpeg", caption: "Chaos, but the good kind.", size: "small" },
  { src: "/images/7.jpeg", caption: "A moment worth keeping forever.", size: "medium" },
  { src: "/images/8.jpeg", caption: "And so many more still to come.", size: "small" },
];

const sizeClasses = {
  large: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  medium: "sm:col-span-1 sm:row-span-2 aspect-[3/4]",
  small: "aspect-square",
};

function PolaroidCard({ photo, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm ${sizeClasses[photo.size]}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-plum/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        {/* Fallback shown until the real photo is added */}
        <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-plum to-midnight-light text-center text-xs text-glow/40">
          add {photo.src.split("/").pop()}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.button>
  );
}

export default function PhotoGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl text-glow glow-text sm:text-5xl">
            Frames We Kept <InlineSparkle />
          </h2>
          <p className="mt-3 font-body text-sm text-glow/60 sm:text-base">
            A few moments that never got old.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {photos.map((photo, i) => (
            <PolaroidCard key={photo.src} photo={photo} onOpen={() => setActive(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 px-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close photo"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-glow hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <motion.div
              key={photos[active].src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[80vh] max-w-2xl flex-col items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[active].src}
                alt=""
                className="max-h-[65vh] rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-5 text-center font-display text-lg text-glow/90 sm:text-xl">
                {photos[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
