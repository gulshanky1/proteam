"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calculator,
  FileCheck,
  Landmark,
  ShieldCheck,
  FileSpreadsheet,
  Users,
} from "lucide-react";

export default function PayrollOverview() {
  const features = [
    {
      icon: Calculator,
      title: "Payroll Processing",
      desc: "Accurate salary calculations and monthly payroll execution.",
    },
    {
      icon: Landmark,
      title: "Statutory Compliance",
      desc: "PF, ESI, PT, LWF and labor law compliance management.",
    },
    {
      icon: FileCheck,
      title: "Audit Support",
      desc: "Professional assistance during inspections and audits.",
    },
    {
      icon: FileSpreadsheet,
      title: "Payroll Reporting",
      desc: "Monthly reports, challans and employee payroll records.",
    },
    {
      icon: Users,
      title: "Employee Management",
      desc: "Employee records, documentation and lifecycle management.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Confidential",
      desc: "Complete confidentiality and secure payroll operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Image + Content side by side ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl"
            />
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[28px] border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/payroll1.jpeg"
                alt="PROTEAM payroll management services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text content only */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            <span className="inline-flex w-fit items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Payroll Management
            </span>

            <h2 className="mt-5 text-2xl  font-black text-slate-900 leading-tight">
              Complete Payroll{" "}
              <span className="text-blue-600">Management Solutions</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-600 text-base leading-8">
              <p>
                At PROTEAM, we provide comprehensive payroll management
                services that allow organizations to focus on business growth
                while we handle payroll processing, statutory compliance,
                employee records and payroll administration.
              </p>
              <p>
                With years of expertise and technology-driven systems, we
                ensure accurate salary processing, timely payments, complete
                confidentiality and compliance with ever-changing labor
                regulations.
              </p>
              <p>
                From payroll calculations and payslip generation to PF, ESI,
                PT and LWF compliance, our experts manage the complete payroll
                lifecycle with precision and transparency.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: All 6 cards in a straight row ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 md:mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-6">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}