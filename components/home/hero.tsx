"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const BANNER_IMAGES = [
  {
    src: "/service1.jpeg",
    alt: "Professional team collaborating in a modern office",
  },
  {
    src: "/service2.jpeg",
    alt: "Business leaders shaking hands after a successful hire",
  },
  {
    src: "/service3.jpeg",
    alt: "Diverse team working together at a startup",
  },
  {
    src: "/service4.jpeg",
    alt: "Workforce management solutions",
  },
  {
    src: "/banner05.jpeg",
    alt: "Facility management services",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);

      setCurrent(
        (index + BANNER_IMAGES.length) %
          BANNER_IMAGES.length
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto ">

        {/* Banner */}
        <div
          className="
            relative
            overflow-hidden
            
            w-full

            h-[220px]
            sm:h-[320px]
            md:h-[450px]
            lg:h-[550px]
            xl:h-[650px]
          "
        >

          {/* Slides */}
          {BANNER_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`
                absolute
                inset-0
                transition-opacity
                duration-700
                ease-in-out
                ${
                  idx === current
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                className="
                  w-full
                  h-full
                  object-fit
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}

          {/* Previous Button */}
          <button
            onClick={prev}
            aria-label="Previous Slide"
            className="
              absolute
              left-2
              md:left-4
              top-1/2
              -translate-y-1/2
              z-20

              w-9
              h-9
              md:w-11
              md:h-11

              rounded-full
              bg-white
              text-black
              hover:bg-white

              backdrop-blur-md
              shadow-lg

              flex
              items-center
              justify-center

              transition-all
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next Slide"
            className="
              absolute
              right-2
              md:right-4
              top-1/2
              -translate-y-1/2
              z-20

              w-9
              h-9
              md:w-11
              md:h-11

              rounded-full
              bg-white
              text-black
              hover:bg-white

              backdrop-blur-md
              shadow-lg

              flex
              items-center
              justify-center

              transition-all
            "
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicators */}
          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              z-20

              flex
              gap-2
            "
          >
            {BANNER_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`
                  transition-all
                  duration-300
                  

                  ${
                    idx === current
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/60 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}