"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  UserCog,
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  GraduationCap,
} from "lucide-react";

export default function HousekeepingApproach() {
  const process = [
    {
      icon: UserCog,
      title: "Dedicated Daily Supervision",
      description:
        "A dedicated supervisor visits your premises daily to inspect cleaning quality, monitor workforce performance and ensure service standards are consistently maintained.",
    },
    {
      icon: ClipboardCheck,
      title: "Client Satisfaction Monitoring",
      description:
        "Regular client satisfaction surveys are conducted to collect feedback, measure service quality and implement improvements wherever required.",
    },
    {
      icon: ShieldCheck,
      title: "High Personal Hygiene Standards",
      description:
        "We maintain strict personal hygiene standards among all housekeeping personnel to ensure a safe, healthy and professional working environment.",
    },
    {
      icon: BadgeCheck,
      title: "Checklist-Based Operations",
      description:
        "Every housekeeping activity is executed through structured checklists ensuring every corner of your premises receives proper attention.",
    },
    {
      icon: GraduationCap,
      title: "Continuous On-The-Job Training",
      description:
        "Our workforce receives regular training programs that help them stay updated with modern cleaning methods, technologies and best practices.",
    },
    {
      icon: FileCheck,
      title: "Employee Verification & Documentation",
      description:
        "Clients receive complete employee documentation including personal details, medical reports and police verification records for transparency and compliance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Our Approach
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Our Professional
            <span className="block text-blue-600">
              Housekeeping Methodology
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            A structured operational framework that ensures
            quality, accountability, hygiene standards and
            complete client satisfaction.
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
              bg-gradient-to-b
              from-blue-200
              via-blue-400
              to-blue-200
              -translate-x-1/2
            "
          />

          <div className="space-y-8">

            {process.map((item, index) => {
              const Icon = item.icon;

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
                  }}
                  transition={{
                    duration: 0.6,
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

                  {/* Center Icon */}
                  <div
                    className="
                      hidden lg:flex
                      absolute
                      left-1/2
                      -translate-x-1/2
                      z-20
                      w-14
                      h-14
                      rounded-full
                      bg-white
                      border-4
                      border-blue-500
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    <Icon
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      w-full
                      lg:w-[46%]
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
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          lg:hidden
                          w-12
                          h-12
                          rounded-md
                          bg-blue-50
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          size={20}
                          className="text-blue-600"
                        />
                      </div>

                      <h3
                        className="
                          text-lg
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-4
                        text-slate-600
                        leading-8
                      "
                    >
                      {item.description}
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
