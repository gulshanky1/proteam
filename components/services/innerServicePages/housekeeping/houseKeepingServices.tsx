"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Sofa,
  Brush,
  Droplets,
  Wind,
  ShieldCheck,
  Trash2,
  Bath,
} from "lucide-react";

export default function HousekeepingServices() {
  const services = [
    {
      icon: Sparkles,
      title: "Dusting & Surface Cleaning",
      description:
        "Thorough dusting of furniture, appliances, equipment, decorative items and all exposed surfaces.",
    },
    {
      icon: Sofa,
      title: "Furniture Care",
      description:
        "Cleaning and maintenance of tables, chairs, workstations, counters and office furniture.",
    },
    {
      icon: Brush,
      title: "Sweeping & Mopping",
      description:
        "Daily sweeping, mopping and washing of floors to maintain a clean and hygienic environment.",
    },
    {
      icon: Wind,
      title: "Vacuum Cleaning",
      description:
        "Professional vacuum cleaning of carpets, rugs and hard-to-reach areas.",
    },
    {
      icon: Sparkles,
      title: "Wood Polishing",
      description:
        "Polishing and maintenance of wooden furniture and decorative surfaces.",
    },
    {
      icon: ShieldCheck,
      title: "Sanitization Services",
      description:
        "Regular sanitization of workstations, common areas, touchpoints and high-contact surfaces.",
    },
    {
      icon: Bath,
      title: "Washroom Maintenance",
      description:
        "Complete cleaning and sanitization of washrooms, sinks, toilets and fixtures.",
    },
    {
      icon: Droplets,
      title: "Mirror & Chrome Cleaning",
      description:
        "Polishing mirrors, glass surfaces and chrome fixtures for a spotless finish.",
    },
    {
      icon: Trash2,
      title: "Waste Management",
      description:
        "Garbage collection, dustbin cleaning and proper disposal of waste materials.",
    },
    {
      icon: Sparkles,
      title: "Room Deodorization",
      description:
        "Freshening indoor spaces and washrooms to maintain a pleasant environment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-md
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
            Housekeeping Services
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Comprehensive
            <span className="block text-blue-600">
              Cleaning & Housekeeping Solutions
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Our housekeeping teams ensure every area of your
            premises remains clean, hygienic, organized and
            professionally maintained.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-md
                  border
                  border-white/40
                  bg-white/70
                  backdrop-blur-xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-md
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    group-hover:bg-blue-100
                    transition-all
                  "
                >
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-7">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}