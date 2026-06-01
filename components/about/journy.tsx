"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const timeline = [
  {
    year: "2017",
    title: "Company Established",
    description:
      "PROTEAM Management Services Pvt. Ltd. was founded to provide reliable workforce and staffing solutions.",
  },
  {
    year: "2019",
    title: "Payroll Expansion",
    description:
      "Expanded into payroll processing, compliance management and workforce administration.",
  },
  {
    year: "2021",
    title: "Facility Services",
    description:
      "Introduced housekeeping, sanitation and facility management solutions.",
  },
  {
    year: "2023",
    title: "Multi-State Presence",
    description:
      "Expanded operations across multiple industries and regions.",
  },
  {
    year: "Today",
    title: "Trusted Workforce Partner",
    description:
      "Supporting businesses with staffing, security and workforce solutions.",
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
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 text-xs uppercase tracking-[0.3em] font-bold">
            Our Journey
          </span>

          <h2 className="mt-4 text-2xl md:text-4xl font-black text-slate-900">
            Growth Through Excellence
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Building trust through workforce management,
            compliance excellence and operational efficiency.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative"
        >
          {/* Background Line */}
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
              to-cyan-400
              origin-top
              rounded-full
              md:-translate-x-1/2
            "
          />

          <div className="space-y-14">

            {timeline.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative flex
                    ${left ? "md:justify-start" : "md:justify-end"}
                  `}
                >
                  {/* Dot */}
                  <div
                    className="
                      absolute
                      left-5
                      md:left-1/2
                      top-8
                      w-5
                      h-5
                      bg-blue-600
                      rounded-full
                      border-4
                      border-white
                      shadow-lg
                      -translate-x-1/2
                      z-20
                    "
                  />

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 80,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      ml-14
                      md:ml-0
                      w-full
                      md:w-[45%]
                    "
                  >
                    <div
                      className="
                        bg-white/70
                        backdrop-blur-xl
                        border
                        border-white/50
                        rounded-[28px]
                        p-6 md:p-8
                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                        hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="
                          inline-flex
                          px-3
                          py-1
                          rounded-full
                          bg-blue-50
                          text-blue-600
                          text-xs
                          font-bold
                        "
                      >
                        {item.year}
                      </span>

                      <h3
                        className="
                          mt-4
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-slate-600
                          leading-7
                        "
                      >
                        {item.description}
                      </p>
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