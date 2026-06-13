"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Briefcase,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function SkillDevelopmentOverview() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Degree Equivalent",
      desc: "B.VOC is fully equivalent to any Bachelor's degree — recognized by UGC and Government of India.",
    },
    {
      icon: BookOpen,
      title: "Online Learning",
      desc: "Flexible online learning and examination designed for working, deployed candidates.",
    },
    {
      icon: TrendingUp,
      title: "Multi-Exit Options",
      desc: "Exit at Diploma (Year 1), Advanced Diploma (Year 2), or full Bachelor's degree (Year 3).",
    },
    {
      icon: Briefcase,
      title: "Learn & Earn Model",
      desc: "Candidates earn a stipend while studying — deployed and productive from day one.",
    },
  ];

  return (
    <section id="overview" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest">
              What Are B.VOC &amp; D.VOC?
            </span>
            <h2 className="mt-4 text-2xl l font-black text-slate-900 leading-tight">
              Vocational Degrees Built{" "}
              <span className="text-blue-600">for the Real World</span>
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 text-base leading-7">
              <p>
                <strong className="text-slate-800">B.VOC (Bachelor of Vocation)</strong> is a
                3-year vocational degree and{" "}
                <strong className="text-slate-800">D.VOC (Diploma of Vocation)</strong> is a
                1–2 year diploma — both approved by the UGC and Government of India.
              </p>
              <p>
                These programs integrate practical industry exposure with academic learning,
                enabling candidates to work full-time while completing a recognized
                qualification. The curriculum is built to match real industry job roles
                for immediate employability.
              </p>
              <p>
                PROTEAM acts as an end-to-end implementation partner — sourcing candidates,
                managing onboarding, coordinating with universities and handling full
                payroll and stipend processing.
              </p>
            </div>
          </motion.div>

          {/* Program cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              {
                label: "B.VOC",
                full: "Bachelor of Vocation",
                duration: "3 Years",
                color: "from-[#081b3a] to-[#164a9c]",
                exits: [
                  "Year 1 → Certificate",
                  "Year 2 → Advanced Diploma",
                  "Year 3 → Bachelor's Degree",
                ],
                note: "Equivalent to any Bachelor's",
              },
              {
                label: "D.VOC",
                full: "Diploma of Vocation",
                duration: "1–2 Years",
                color: "from-blue-500 to-cyan-500",
                exits: [
                  "Year 1 → Diploma",
                  "Year 2 → Advanced Diploma",
                ],
                note: "Fast-track qualification",
              },
            ].map((prog) => (
              <div
                key={prog.label}
                className={`rounded bg-gradient-to-br ${prog.color} p-6 text-white shadow-xl flex flex-col`}
              >
                <div className="text-xl font-black">{prog.label}</div>
                <div className="mt-1 text-sm text-blue-100 font-medium">{prog.full}</div>
                <div className="mt-4 inline-flex w-fit items-center gap-2 px-3 py-1 rounded bg-white/20 text-xs font-semibold">
                  <Clock size={12} /> {prog.duration}
                </div>
                <ul className="mt-5 space-y-2 flex-1">
                  {prog.exits.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-sm text-blue-100">
                      <ArrowRight size={13} className="shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/20 text-xs text-blue-200 font-medium">
                  {prog.note}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500 leading-6">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}