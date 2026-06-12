"use client";

import Link from "next/link";
import {
  Users,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

export default function HowWeWorkHero() {
  return (
    <section className="relative overflow-hidden bg-[#06152d] pt-5 pb-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl">

          <span
            className="
              inline-flex
              px-4
              rounded-full
              bg-blue-500/10
              border
              border-blue-400/20
              text-blue-300
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            Our Working Process
          </span>

          <h1
            className="
              mt-2
              text-2xl
              font-black
              text-white
              leading-tight
            "
          >
            Delivering Workforce
            <span className="block text-blue-400">
              Solutions With Precision
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-base
              md:text-lg
              text-slate-300
              leading-8
            "
          >
            At PROTEAM, we follow a structured approach that
            combines workforce planning, compliance management,
            deployment, supervision and continuous support to
            ensure reliable service delivery for every client.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="
                px-6
                py-3
                rounded-md
                bg-blue-600
                text-white
                font-semibold
                hover:bg-blue-700
                transition-all
              "
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="
                px-6
                py-3
                rounded-md
                border
                border-white/20
                text-white
                hover:bg-white/10
                transition-all
              "
            >
              Explore Services
            </Link>

          </div>

        </div>

        {/* Bottom Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-blue-500/10 border border-blue-500/20">
              <Users className="w-6 h-6 text-blue-400" />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Workforce Planning
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Understanding manpower needs and sourcing
                qualified professionals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-blue-500/10 border border-blue-500/20">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Compliance & Verification
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Ensuring legal compliance, documentation
                and workforce verification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-blue-500/10 border border-blue-500/20">
              <BriefcaseBusiness className="w-6 h-6 text-blue-400" />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Deployment & Support
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Seamless deployment with ongoing supervision
                and operational support.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}