"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-[#f8fafc] pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            md:rounded-[32px]
            shadow-[0_25px_80px_rgba(0,0,0,0.15)]
          "
        >
          {/* Desktop */}
          <div className="hidden lg:block relative h-[380px] ">
            <Image
              src="/banner00.png"
              alt="About PROTEAM"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden relative h-[380px]">
            <Image
              src="/banner01.png"
              alt="About PROTEAM"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Mobile */}
          <div className="block md:hidden relative h-[260px]">
            <Image
              src="/banner02.png"
              alt="About PROTEAM"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081b3a]/40 via-transparent to-[#081b3a]/20" />
        </div>

        

      </div>
    </section>
  );
}