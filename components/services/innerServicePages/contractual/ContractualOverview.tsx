"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

export default function ContractualOverview() {
  const features = [
    {
      icon: Users,
      title: "Flexible Workforce",
      desc: "Scale manpower requirements up or down according to business demands.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Management",
      desc: "Complete statutory compliance including PF, ESI, payroll and labour regulations.",
    },
    {
      icon: Briefcase,
      title: "Specialized Talent",
      desc: "Access skilled professionals across engineering, IT, manufacturing and services.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      desc: "Focus on core operations while we manage workforce deployment and administration.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Image + Content side by side ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -left-8 w-40 h-40 rounded-full bg-blue-100/70 blur-3xl"
            />
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/services/contractual/overview.jpg"
                alt="PROTEAM contractual manpower services — professionals collaborating"
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
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest">
              Contractual Manpower
            </span>

            <h2 className="mt-4 text-2xl  font-black text-slate-900 leading-tight">
              Flexible Workforce{" "}
              <span className="text-blue-600">Solutions for Every Business</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-600 text-base leading-7">
              <p>
                Contractual manpower services enable businesses to access skilled
                professionals without the complexities of direct recruitment and
                workforce administration.
              </p>
              <p>
                At PROTEAM, we provide complete manpower outsourcing solutions,
                allowing organizations to improve efficiency, reduce operational
                burden, and maintain workforce flexibility according to project
                requirements.
              </p>
              <p>
                From engineering and IT staffing to general workforce deployment,
                we deliver qualified professionals supported by payroll
                management, compliance handling and continuous workforce
                supervision.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: All 4 cards in a single straight row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-6">
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