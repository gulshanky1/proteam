"use client";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const BANNER_IMAGES = [
  {
    src: "/banners/banner1.jpg",
    alt: "Professional team collaborating in a modern office",
  },
  {
    src: "/banners/banner2.jpg",
    alt: "Business leaders shaking hands after a successful hire",
  },
  {
    src: "/banners/banner3.jpg",
    alt: "Diverse team working together at a startup",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + BANNER_IMAGES.length) % BANNER_IMAGES.length);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative pt-16  bg-gray-50 overflow-hidden flex flex-col">

     

      {/* ── Banner Carousel ── */}
      <div className="relative flex-1 mt-6 sm:mt-8 mx-3 sm:mx-6 lg:mx-12 xl:mx-16 rounded-xl sm:rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px]">

        {/* Slides */}
        {BANNER_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
            aria-hidden={idx !== current}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        ))}

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous banner"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next banner"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {BANNER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to banner ${idx + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                idx === current
                  ? "w-5 sm:w-6 h-2 sm:h-2.5 bg-white"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

    </section>
  );
}