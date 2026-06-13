"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  RefreshCcw,
  Briefcase,
  Clock,
  Users,
  GraduationCap,
  Zap,
} from "lucide-react";

export default function IndustryProblem() {
  const problems = [
    { icon: AlertTriangle, label: "Skill gap in workforce" },
    { icon: BarChart3,     label: "Low productivity" },
    { icon: RefreshCcw,    label: "High attrition" },
    { icon: Briefcase,     label: "Repeated hiring costs" },
    { icon: Clock,         label: "Short-term staffing" },
    { icon: Users,         label: "Workforce instability" },
    { icon: GraduationCap, label: "Training dependency" },
    { icon: Zap,           label: "Operational delays" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex px-4 py-2 rounded-md bg-red-50 border border-red-100 text-red-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Industry Background
          </span>
          <h2 className="mt-5 text-xl sm:text-2xl  font-black text-slate-900 leading-tight">
            The Workforce Problem{" "}
            <span className="text-blue-600">We Solve</span>
          </h2>
          <p className="mt-5 text-slate-600 leading-8">
            Organizations across industries are struggling with skill shortages,
            high attrition and escalating recruitment costs. Conventional hiring
            approaches do not support long-term workforce retention or
            industry-ready skill development.
          </p>
        </div>

        {/* 8 problem cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4"
              >
                <Icon size={18} className="text-red-400 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{p.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Solution callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#081b3a] via-[#0f2f66] to-[#164a9c] p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Need for a Structured, Long-Term Workforce Solution
              </h3>
              <p className="mt-4 text-blue-200 text-base leading-7">
                B.VOC &amp; D.VOC programs bridge this gap — creating
                industry-ready talent with guaranteed 1–3 year retention
                and significantly lower attrition than conventional hiring models.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "3x",    l: "Higher retention vs contractual hiring" },
                { v: "0%",    l: "PF & ESI burden on company" },
                { v: "Day 1", l: "Productive from deployment" },
                { v: "49K+",  l: "Companies using apprentices" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-white/10 border border-white/20 p-4 text-center"
                >
                  <div className="text-2xl font-black text-cyan-300">{s.v}</div>
                  <div className="mt-1 text-xs text-blue-200 leading-5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}