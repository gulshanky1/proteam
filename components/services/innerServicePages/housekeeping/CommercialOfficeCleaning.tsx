"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Monitor,
  Coffee,
  ShieldCheck,
} from "lucide-react";

export default function CommercialOfficeCleaning() {
  const services = [
    "General Dusting",
    "Floor Sweeping & Mopping",
    "Washroom Maintenance",
    "Vacuum Cleaning",
    "Computer Cleaning",
    "Pantry Services",
    "Reception Area Cleaning",
    "Escalator Cleaning",
    "Elevator Cleaning",
    "External Surface Cleaning",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── TOP: Image + Text side by side ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Commercial Office Cleaning
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Professional Cleaning{" "}
              <span className="text-blue-600">For Modern Workspaces</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-600 text-base leading-8">
              <p>
                Our commercial office cleaning services are designed to maintain
                clean, organized and productive workplaces while enhancing
                employee comfort and creating a positive impression for visitors
                and clients.
              </p>
              <p>
                From workstations and reception areas to elevators, escalators
                and external surfaces, our trained housekeeping teams ensure
                every area receives meticulous attention.
              </p>
              <p>
                Every contract is customized according to your business
                requirements, ensuring maximum value, operational efficiency and
                complete client satisfaction.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl"
            />
            <div className="relative w-full min-h-[360px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/house1.jpeg"
                alt="Commercial Office Cleaning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/70 backdrop-blur-xl p-4 shadow-xl">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Tailor-Made Cleaning Solutions
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-6">
                      Customized housekeeping programs built around your
                      business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: Service list + Stats — full width, separate div ── */}
        <div className="space-y-6">

          {/* Service List — 2 cols on mobile, 5 cols on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                <span className="text-slate-700 text-sm font-medium">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats — 3 cols full width */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Building2, label: "Corporate Offices" },
              { icon: Monitor, label: "IT Workspaces" },
              { icon: Coffee, label: "Pantry Areas" },
            ].map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="rounded-xl bg-blue-50 p-4 text-center"
              >
                <Icon className="mx-auto text-blue-600" size={24} />
                <div className="mt-2 text-sm font-medium text-slate-800">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}