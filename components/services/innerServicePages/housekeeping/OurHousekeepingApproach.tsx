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

  // Group into pairs: [[0,1], [2,3], [4,5]]
  const pairs = [];
  for (let i = 0; i < process.length; i += 2) {
    pairs.push(process.slice(i, i + 2));
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Our Approach
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Our Professional{" "}
            <span className="block text-blue-600">Housekeeping Methodology</span>
          </h2>
          <p className="mt-5 text-slate-600 leading-8">
            A structured operational framework that ensures quality,
            accountability, hygiene standards and complete client satisfaction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2"
          />

          {/* Paired rows */}
          <div className="space-y-8">
            {pairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">

                {pair.map((item, side) => {
                  const Icon = item.icon;
                  const globalIndex = pairIndex * 2 + side;
                  const isLeft = side === 0;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: globalIndex * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={isLeft ? "lg:pr-14" : "lg:pl-14"}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="h-full rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-200"
                      >
                        {/* Icon — visible on all sizes */}
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                          <Icon size={22} className="text-blue-600" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-600 leading-7">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Center dot per row */}
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-md"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}