"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Hospital,
  GraduationCap,
  Hotel,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function HousekeepingManagement() {
  const sectors = [
    {
      icon: ShoppingBag,
      title: "Shopping Centers & Showrooms",
      description:
        "Maintaining clean, attractive and customer-friendly retail environments that enhance visitor experiences.",
    },
    {
      icon: Building2,
      title: "Corporate Workplaces",
      description:
        "Professional housekeeping support for offices, business parks and commercial establishments.",
    },
    {
      icon: Hospital,
      title: "Healthcare Institutions",
      description:
        "Hygiene-focused cleaning solutions for hospitals, clinics and healthcare facilities.",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description:
        "Comprehensive cleaning programs for schools, colleges, universities and training centers.",
    },
    {
      icon: Hotel,
      title: "Hospitality Sector",
      description:
        "High-standard housekeeping services for hotels, guest houses and hospitality facilities.",
    },
    {
      icon: Users,
      title: "Residential & Mixed Facilities",
      description:
        "Reliable manpower support for residential complexes and mixed-use developments.",
    },
  ];

  const strengths = [
    {
      icon: ShieldCheck,
      title: "Reliable Workforce",
      description:
        "Experienced, verified and professionally trained cleaning personnel.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description:
        "Use of quality materials, modern equipment and proven cleaning methodologies.",
    },
    {
      icon: Users,
      title: "Client-Centric Service",
      description:
        "Flexible housekeeping solutions tailored to client-specific requirements.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
            Housekeeping Management
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            Professional Facility
            <span className="block text-blue-600">
              Management Excellence
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            We deliver premium housekeeping management services
            across diverse industry sectors while maintaining
            the highest standards of hygiene, efficiency and
            customer satisfaction.
          </p>

        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

          {sectors.map((sector, index) => {
            const Icon = sector.icon;

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
                  rounded-md
                  border
                  border-white/40
                  bg-white/70
                  backdrop-blur-xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-md
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={26}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {sector.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {sector.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Strength Section */}
        <div
          className="
            mt-14
            rounded-md
            border
            border-white/30
            bg-white/70
            backdrop-blur-xl
            shadow-xl
            p-6
            md:p-10
          "
        >

          <div className="text-center max-w-2xl mx-auto">

            <h3 className="text-xl md:text-2xl font-black text-slate-900">
              Why Organizations Trust PROTEAM
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              We combine skilled manpower, modern equipment,
              operational discipline and customer-focused
              service delivery to create cleaner, safer and
              more productive environments.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-md
                    bg-slate-50
                    border
                    border-slate-200
                    p-6
                    text-center
                  "
                >
                  <div
                    className="
                      mx-auto
                      w-14
                      h-14
                      rounded-md
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={26}
                      className="text-blue-600"
                    />
                  </div>

                  <h4 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}