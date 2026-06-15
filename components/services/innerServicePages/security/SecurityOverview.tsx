"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Fingerprint, SearchCheck, Lock } from "lucide-react";

export default function SecurityOverview() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Risk Mitigation",
      description:
        "Identification and prevention of security threats before they impact your business operations.",
    },
    {
      icon: Fingerprint,
      title: "Background Verification",
      description:
        "Comprehensive verification and due diligence for individuals, employees and business partners.",
    },
    {
      icon: SearchCheck,
      title: "Fraud Investigation",
      description:
        "Professional investigation support for fraud, cheating, identity theft and data breaches.",
    },
    {
      icon: Lock,
      title: "Asset Protection",
      description:
        "Protection of physical infrastructure, personnel, sensitive information and digital assets.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Image + Content side by side ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-10 w-44 h-44 bg-blue-100 rounded blur-3xl"
            />
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded shadow-2xl">
              <Image
                src="/security2.png"
                alt="PROTEAM security and risk management services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-fit"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text content only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit px-3 py-1.5 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest">
              Security Solutions
            </span>

            <h2 className="mt-4 text-2xl  font-black text-slate-900 leading-tight">
              Comprehensive Security &{" "}
              <span className="text-blue-600">Risk Management Services</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-600 text-base leading-7">
              <p>
                In today's highly connected environment, organizations face
                increasing threats from fraud, identity theft, cyber risks,
                information leaks and security breaches.
              </p>
              <p>
                PROTEAM helps businesses protect their people, assets,
                operations and reputation through advanced investigation,
                intelligence gathering, risk assessment and security services.
              </p>
              <p>
                Our experts conduct thorough due diligence, background
                verification and corporate intelligence investigations
                that enable clients to make informed business decisions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: All 4 cards in a single straight row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-14">
          {services.map((item, index) => {
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
                className="bg-white border border-slate-200 rounded p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-6">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}