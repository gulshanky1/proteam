"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Briefcase, Building2, CheckCircle } from "lucide-react";

export default function StaffingOverview() {
  const features = [
    {
      icon: Users,
      title: "Qualified Talent Pool",
      desc: "Access to skilled professionals across industries and job functions.",
    },
    {
      icon: Briefcase,
      title: "Executive Search",
      desc: "Leadership hiring and recruitment for managerial and senior positions.",
    },
    {
      icon: Building2,
      title: "Flexible Staffing",
      desc: "Permanent, temporary, project-based and contract staffing solutions.",
    },
    {
      icon: CheckCircle,
      title: "Verified Candidates",
      desc: "Comprehensive screening, assessment and background verification.",
    },
  ];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Image + Content side by side ── */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 xl:gap-20 items-start">

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
              className="pointer-events-none absolute -top-6 -left-6 md:-top-10 md:-left-10 w-28 h-28 md:w-40 md:h-40 bg-blue-100 rounded-full blur-3xl"
            />
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl">
              <Image
                src="/staffin1.jpeg"
                alt="PROTEAM staffing and recruitment services"
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
            <span className="inline-flex w-fit px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
              Staffing Solutions
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Strategic Staffing{" "}
              <span className="text-blue-600">Solutions for Modern Enterprises</span>
            </h2>

            <div className="mt-4 space-y-3 text-slate-600 text-sm sm:text-base leading-7">
              <p>
                At PROTEAM, we provide comprehensive staffing and recruitment
                solutions designed to help organizations identify, attract and
                retain highly qualified professionals.
              </p>
              <p>
                Through our extensive talent network, industry expertise and
                proven recruitment methodologies, we connect businesses with
                candidates who possess the right skills, attitude and commitment
                to contribute to organizational success.
              </p>
              <p>
                Whether you require permanent recruitment, temporary staffing,
                project-based hiring or executive search services, our team
                ensures reliable workforce solutions aligned with your business
                objectives.
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