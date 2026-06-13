"use client";

import { motion } from "framer-motion";
import {
  Search,
  Brush,
  Droplets,
  Waves,
  ShieldCheck,
  Wind,
  ClipboardCheck,
} from "lucide-react";

export default function SanitationProcess() {
  const steps = [
    {
      icon: Search,
      title: "Inspection & Equipment Breakdown",
      description:
        "Equipment is inspected and dismantled where necessary to identify critical cleaning areas and determine appropriate cleaning methods.",
    },
    {
      icon: Brush,
      title: "Sweeping, Scraping & Flushing",
      description:
        "Removal of visible debris, particles and residues using scraping, sweeping and warm water flushing procedures.",
    },
    {
      icon: Droplets,
      title: "Washing",
      description:
        "Application of approved detergents and cleaning agents to remove soils, grease and contaminants from surfaces.",
    },
    {
      icon: Waves,
      title: "Rinsing",
      description:
        "Complete removal of detergent residues using potable water to prepare surfaces for sanitization.",
    },
    {
      icon: ShieldCheck,
      title: "Sanitizing",
      description:
        "Application of industry-approved sanitizers to eliminate harmful microorganisms and ensure hygienic conditions.",
    },
    {
      icon: Wind,
      title: "Rinse / Air Dry",
      description:
        "Surfaces are either rinsed or left to air dry according to sanitizer specifications and compliance standards.",
    },
    {
      icon: ClipboardCheck,
      title: "Validation & Verification",
      description:
        "Final inspection, microbial testing and verification procedures ensure sanitation effectiveness and compliance.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

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
            Sanitation Methodology
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Our 7-Step
            <span className="block text-blue-600">
              Sanitation Process
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            A systematic sanitation framework designed
            to ensure cleanliness, food safety, hygiene
            compliance and operational excellence.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div
            className="
              hidden lg:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-slate-200
              -translate-x-1/2
            "
          />

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className={`
                    relative
                    flex
                    ${
                      index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >
                  {/* Center Circle */}
                  <div
                    className="
                      hidden lg:flex
                      absolute
                      left-1/2
                      top-10
                      -translate-x-1/2
                      z-20
                      w-16
                      h-16
                      rounded-full
                      bg-white
                      border-4
                      border-blue-600
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    <Icon
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      w-full
                      lg:w-[45%]
                      rounded-[30px]
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-slate-200
                      shadow-xl
                      p-6 md:p-8
                    "
                  >
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          lg:hidden
                          w-14
                          h-14
                          rounded-2xl
                          bg-blue-50
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          size={22}
                          className="text-blue-600"
                        />
                      </div>

                      <div>
                        <span className="text-sm font-bold text-blue-600">
                          STEP {index + 1}
                        </span>

                        <h3
                          className="
                            text-lg
                            md:text-xl
                            font-bold
                            text-slate-900
                            mt-1
                          "
                        >
                          {step.title}
                        </h3>
                      </div>

                    </div>

                    <p className="mt-5 text-slate-600 leading-7">
                      {step.description}
                    </p>

                  </motion.div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}