"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Music, Music2 } from "lucide-react";

/**
 * MusicPlayer
 * Floating, glowing music toggle in the corner of the screen.
 *
 * Put your song at: public/music/birthday-song.mp3
 * (Any filename works as long as you keep this path, or change SRC below.)
 *
 * Autoplay note: browsers block audio until a real user gesture happens.
 * That's why this component exposes `play()` via a ref — the parent page
 * calls musicRef.current.play() *inside* the "Open Your Surprise" button's
 * onClick handler, so the very click that opens the surprise is the same
 * gesture that starts the music. Playback never starts on its own.
 */
const SRC = "/music/birthday-song.mp3";

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(true);

  useImperativeHandle(ref, () => ({
    play: async () => {
      if (!audioRef.current) return;
      try {
        audioRef.current.volume = 0.55;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        // If the mp3 hasn't been added yet, or the browser still blocks it,
        // fail silently instead of throwing a console error.
        setReady(false);
      }
    },
    setVolume: (v) => {
      if (audioRef.current) audioRef.current.volume = v;
    },
  }));

  const toggle = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setReady(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="none" />

      <button
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        aria-pressed={isPlaying}
        className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full glass transition-transform hover:scale-110 active:scale-95 ${
          isPlaying ? "animate-glowPulse" : ""
        }`}
      >
        {isPlaying ? (
          <Music2 className="text-gold" size={22} />
        ) : (
          <Music className="text-glow/80" size={22} />
        )}

        {/* Tiny equalizer bars, only animate while playing */}
        {isPlaying && (
          <span className="absolute -bottom-1 flex items-end gap-[2px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-gold"
                style={{
                  height: "6px",
                  animation: `eq 0.9s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </span>
        )}
      </button>

      {!ready && (
        <p className="fixed bottom-20 right-5 z-40 max-w-[220px] rounded-lg bg-black/60 px-3 py-2 text-xs text-glow/70">
          Add your song at public/music/birthday-song.mp3 to hear it play.
        </p>
      )}

      <style jsx global>{`
        @keyframes eq {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
      `}</style>
    </>
  );
});

export default MusicPlayer;
