"use client";

import { motion } from "framer-motion";
import { Building2, BookOpen, Award } from "lucide-react";

export default function ProgramStructure() {
  const steps = [
    {
      step: "01",
      icon: Building2,
      title: "Workplace Deployment & University Enrollment",
      desc: "Candidates (10+2) are deployed directly as company trainees and simultaneously enrolled in UGC approved universities for BVOC/DVOC. No gap between work and study.",
    },
    {
      step: "02",
      icon: BookOpen,
      title: "Industry-Aligned Curriculum & On-the-Job Skill Development",
      desc: "Curriculum is designed to match industry-specific job roles. Continuous practical training while contributing to daily productivity — theory and practice in parallel.",
    },
    {
      step: "03",
      icon: Award,
      title: "Multi Point Exit — For Industry & Trainee",
      desc: "1st Year → Diploma · 2nd Year → Advanced Diploma · 3rd Year → Bachelor's in Vocational Studies. Structured exit flexibility for both the company and the trainee.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Program Structure
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            How the Program{" "}
            <span className="text-blue-600">Works</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-7">
            This integrated model ensures a skilled, job-ready and
            industry-aligned workforce that is productive from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Big step number watermark */}
                <div className="absolute top-5 right-6 text-6xl font-black text-slate-100 leading-none select-none">
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon size={22} className="text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900 text-base leading-snug pr-10">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 600% callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="text-5xl md:text-6xl font-black text-blue-600 shrink-0">
            600%
          </div>
          <p className="text-slate-700 text-sm md:text-base leading-7 text-center sm:text-left">
            Apprenticeship participation has expanded rapidly — industry adoption
            growing over <strong>600%</strong> in registered establishments and
            more than <strong>49,000 companies</strong> engaging apprentices
            across sectors since 2016.
          </p>
        </motion.div>

      </div>
    </section>
  );
}