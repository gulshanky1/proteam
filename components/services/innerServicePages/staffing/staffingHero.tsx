"use client";

import Image from "next/image";

export default function StaffingHero() {
  return (
    <section className="bg-[#f8fafc] pt-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl">

          {/* Desktop Banner */}
          <div className="hidden lg:block relative h-[400px] ">
            <Image
              src="/9997services-banner.jpg"
              alt="Staffing Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Tablet Banner */}
          <div className="hidden md:block lg:hidden relative h-[420px]">
            <Image
              src="/banners/staffing-tablet.jpg"
              alt="Staffing Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Mobile Banner */}
          <div className="block md:hidden relative h-[280px]">
            <Image
              src="/banners/staffing-mobile.jpg"
              alt="Staffing Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081b3a]/80 via-[#081b3a]/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-6 md:px-10 lg:px-16">

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  px-4
                  py-2
                  text-[11px]
                  md:text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                "
              >
                PROTEAM Staffing Services
              </span>

              <h1
                className="
                  mt-5
                  text-2xl
                  
                  font-black
                  text-white
                  leading-tight
                "
              >
                Professional Staffing
                <span className="block text-blue-300">
                  Solutions for Growing Businesses
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  md:text-base
                  lg:text-lg
                  leading-7
                  text-blue-100
                "
              >
                Connecting organizations with qualified,
                skilled and reliable professionals through
                strategic recruitment, workforce planning,
                and staffing expertise.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

               

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    px-6
                    py-3
                    text-white
                    font-semibold
                    transition-all
                    hover:bg-white/20
                  "
                >
                  Contact Us
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}