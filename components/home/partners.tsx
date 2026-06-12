// components/TrustedBySection.tsx

"use client";

import Image from "next/image";

export default function TrustedBySection() {
  const logos = Array.from(
    { length: 44 },
    (_, i) => `/logos/logo${i + 1}.jpeg`
  );

  return (
    <section className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 mb-8">
          Trusted by 40+ Leading Companies
        </p>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Moving Logos */}
          <div className="flex animate-marquee w-max items-center">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                  shrink-0
                  px-6
                  md:px-10
                "
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={160}
                  height={80}
                  className="
                    h-12
                    md:h-16
                    w-[120px]
                    md:w-[160px]
                    object-contain
                    
                    opacity-70
                    hover:grayscale-0
                    hover:opacity-100
                    transition-all
                    duration-300
                  "
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}