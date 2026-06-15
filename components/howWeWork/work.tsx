"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Target,
} from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We understand workforce requirements, operational goals, job roles and skill expectations before creating a deployment strategy.",
    icon: Target,
  },
  {
    title: "Talent Sourcing & Screening",
    description:
      "Candidates are sourced, screened and verified through structured recruitment and background verification.",
    icon: Users,
  },
  {
    title: "Deployment & Monitoring",
    description:
      "Selected candidates are deployed and simultaneously monitored or smooth induction ",
    icon: GraduationCap,
  },
  {
    title: "Training & Skill Development",
    description:
      "Continuous on-the-job learning + traning programs conducted facilitate  long-term skill enhancement.",
    icon: Briefcase,
  },
  {
    title: "Payroll & Compliance Management",
    description:
      "We handle payroll processing, attendance, PF, ESI, statutory compliance and reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Support & Optimization",
    description:
      "Regular reviews, workforce optimization, reporting and replacement support ensure long-term success.",
    icon: Target,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-2 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Our Process
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            How We Work
          </h2>

          <p className="mt-5 text-slate-600 leading-7">
            A structured process designed to deliver skilled,
            compliant and productive workforce solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Sticky Left */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">

              <span className="text-blue-600 font-semibold uppercase tracking-widest text-xs">
                Workforce Journey
              </span>

              <h3 className="mt-4 text-2xl font-black text-slate-900">
                From Hiring to Workforce Success
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Every step is carefully managed to ensure
                compliance, productivity and business growth.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    <span className="text-slate-700 text-sm">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Stacked Cards */}
          <div className="space-y-24">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 120,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    sticky
                    top-24
                  "
                >
                  <div
                    className="
                      bg-white/70
                      backdrop-blur-2xl
                      border
                      border-white/40
                      rounded-[32px]
                      p-8
                      md:p-10
                      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    "
                  >
                    <div className="flex items-center justify-between">

                      <div
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-blue-50
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          className="text-blue-600"
                          size={30}
                        />
                      </div>

                      <span className="text-6xl font-black text-blue-100">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-slate-600 leading-8 text-lg">
                      {step.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}