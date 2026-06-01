// components/ServicesSection.tsx

import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Sparkles,
  Building2,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] py-16 lg:py-20">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">

          <div>
            <h2 className="text-2xl  font-black text-[#111827] mb-3">
              Comprehensive Management Services
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              Modern solutions for complex facility and workforce requirements.
            </p>
          </div>

          <Link
            href="/services"
            className="
              hidden
              sm:flex
              items-center
              gap-2
              rounded-full
              border
              border-white/40
              bg-white/50
              backdrop-blur-xl
              px-5
              py-3
              text-blue-600
              font-semibold
              text-sm
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* LEFT */}
          <div className="lg:col-span-8 flex flex-col gap-5">

            {/* Staffing */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/40
                bg-white/60
                backdrop-blur-xl
                p-7
                min-h-[190px]
                flex
                flex-col
                justify-between
                shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                hover:shadow-[0_16px_40px_rgba(31,38,135,0.12)]
                transition-all
                duration-500
                hover:-translate-y-1
              "
            >

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-5">
                  <Users className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Staffing Solutions
                </h3>

                <p className="text-sm text-gray-600 leading-7 max-w-2xl">
                  Flexible and scalable workforce
                  support for temporary,
                  contractual, or project-based
                  requirements.
                </p>
              </div>

              <div className="relative z-10 flex gap-3 mt-6">
                <span className="bg-white/70 backdrop-blur-md border border-white/40 text-gray-700 text-[11px] px-4 py-2 rounded-full font-medium">
                  Contractual
                </span>

                <span className="bg-white/70 backdrop-blur-md border border-white/40 text-gray-700 text-[11px] px-4 py-2 rounded-full font-medium">
                  Permanent
                </span>
              </div>
            </div>

            {/* Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Security */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-xl
                  p-7
                  min-h-[180px]
                  shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(31,38,135,0.12)]
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Security
                  </h3>

                  <p className="text-sm text-gray-600 leading-7">
                    Expert manned guarding and surveillance monitoring.
                  </p>
                </div>
              </div>

              {/* Housekeeping */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-xl
                  p-7
                  min-h-[180px]
                  shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(31,38,135,0.12)]
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Housekeeping
                  </h3>

                  <p className="text-sm text-gray-600 leading-7">
                    Professional hygiene management for corporate spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Facility */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/20
                bg-gradient-to-br
                from-[#0a2b57]
                via-[#0d3b78]
                to-[#1552a1]
                p-7
                min-h-[170px]
                flex
                items-start
                justify-between
                shadow-[0_16px_50px_rgba(13,59,120,0.25)]
              "
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-400/20 blur-3xl rounded-full"></div>

              <div className="relative z-10 max-w-xl">
                <h3 className="text-white text-xl font-semibold mb-3">
                  Facility & Sanitation
                </h3>

                <p className="text-blue-100 text-sm leading-7">
                  Integrated facility management including HVAC maintenance,
                  specialized sanitation, and electrical audits.
                </p>
              </div>

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                <Building2 className="w-8 h-8 text-white/80" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#081b3a]/90
                backdrop-blur-2xl
                p-8
                h-full
                min-h-[560px]
                flex
                flex-col
                shadow-[0_20px_60px_rgba(8,27,58,0.35)]
              "
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6">
                <Wallet className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Payroll Management
                </h3>

                <p className="text-slate-300 text-sm leading-8 mb-10">
                  End-to-end statutory compliance, salary processing,
                  and labor law advisory with zero-error precision.
                </p>
              </div>

              <ul className="relative z-10 space-y-5 mt-auto">

                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-400"
                  />

                  PF & ESIC Compliance
                </li>

                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-400"
                  />

                  Tax Deductions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}