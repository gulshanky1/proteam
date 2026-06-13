"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SkillDevelopmentHero() {
  return (
    <section className="bg-[#f8fafc] pt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="relative h-[220px] sm:h-[300px] md:h-[400px] lg:h-[520px] rounded-3xl bg-gradient-to-r from-[#081b3a] via-[#0f2f66] to-[#164a9c] overflow-hidden mb-10 md:mb-14">
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-semibold uppercase tracking-[0.25em]"
            >
              Skill Development Programs
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl"
            >
              B.VOC &amp; D.VOC
              <span className="block text-cyan-300">Industry-Integrated Programs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-blue-100 text-sm sm:text-base md:text-lg max-w-3xl leading-7"
            >
              UGC-approved vocational degrees built on the "Learn &amp; Earn" model.
              Fully compliant with new labour laws — an industry-integrated workforce
              solution that builds talent from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#0f2f66] font-bold text-sm hover:bg-blue-50 transition-colors duration-200"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "3 Years",   label: "B.VOC Duration" },
            { value: "1–2 Years", label: "D.VOC Duration" },
            { value: "UGC",       label: "Government Approved" },
            { value: "600%+",     label: "Industry Growth Since 2016" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">{s.value}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}