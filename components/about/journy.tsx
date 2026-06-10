"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const timeline = [
  {
    title: "Company Established",
    description:
      "PROTEAM Management Services Pvt. Ltd. was founded to provide reliable workforce and staffing solutions.",
    image: "/about/company-established.jpg",
  },
  {
    title: "Payroll Expansion",
    description:
      "Expanded into payroll processing, compliance management and workforce administration.",
    image: "/about/payroll-expansion.jpg",
  },
  {
    title: "Facility Services",
    description:
      "Introduced housekeeping, sanitation and facility management solutions.",
    image: "/about/facility-services.jpg",
  },
  {
    title: "Multi-State Presence",
    description:
      "Expanded operations across multiple industries and regions across India.",
    image: "/about/multi-state.jpg",
  },
  {
    title: "Trusted Workforce Partner",
    description:
      "Today PROTEAM supports organizations with staffing, payroll, security and facility management solutions nationwide.",
    image: "/about/trusted-partner.jpg",
  },
];

export default function AboutTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            Our Journey
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            Growth Through
            <span className="block text-blue-600">
              Excellence & Innovation
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Building trust through workforce management,
            compliance excellence and operational efficiency.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">

          {/* Center Line */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              h-full
              w-[2px]
              bg-slate-200
              md:-translate-x-1/2
            "
          />

          {/* Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              h-full
              w-[4px]
              bg-gradient-to-b
              from-blue-600
              via-cyan-500
              to-blue-700
              rounded-full
              origin-top
              md:-translate-x-1/2
            "
          />

          <div className="space-y-14 md:space-y-20">

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-5
                      md:left-1/2
                      top-1/2
                      -translate-y-1/2
                      md:-translate-x-1/2
                      w-5
                      h-5
                      rounded-full
                      bg-blue-600
                      border-4
                      border-white
                      shadow-lg
                      z-20
                    "
                  />

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-between w-full gap-10">

                    {isLeft ? (
                      <>
                        {/* Content */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -80,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="w-[46%]"
                        >
                          <div
                            className="
                              bg-white
                              border
                              border-slate-200
                              rounded-md
                              p-8
                              shadow-lg
                              hover:shadow-xl
                              transition-all
                            "
                          >
                            <h3 className="text-xl font-bold text-slate-900">
                              {item.title}
                            </h3>

                            <p className="mt-4 text-slate-600 leading-8">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 80,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="w-[46%]"
                        >
                          <div
                            className="
                              relative
                              h-[280px]
                              overflow-hidden
                              rounded-md
                              shadow-xl
                              border
                              border-slate-200
                            "
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                              "
                            />
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Image */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -80,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="w-[46%]"
                        >
                          <div
                            className="
                              relative
                              h-[280px]
                              overflow-hidden
                              rounded-md
                              shadow-xl
                              border
                              border-slate-200
                            "
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                              "
                            />
                          </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 80,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="w-[46%]"
                        >
                          <div
                            className="
                              bg-white
                              border
                              border-slate-200
                              rounded-md
                              p-8
                              shadow-lg
                              hover:shadow-xl
                              transition-all
                            "
                          >
                            <h3 className="text-xl font-bold text-slate-900">
                              {item.title}
                            </h3>

                            <p className="mt-4 text-slate-600 leading-8">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    className="
                      md:hidden
                      ml-14
                      w-full
                    "
                  >
                    <div
                      className="
                        bg-white
                        rounded-md
                        border
                        border-slate-200
                        overflow-hidden
                        shadow-lg
                      "
                    >
                      <div className="relative h-52">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-slate-600 leading-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}