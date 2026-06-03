"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  SearchCheck,
  Lock,
} from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-100 rounded-full blur-3xl" />

            <div className="relative rounded-md overflow-hidden shadow-2xl">
              <Image
                src="/services/security-overview.jpg"
                alt="Security Services"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Security Solutions
            </span>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              Comprehensive Security &
              <span className="block text-blue-600">
                Risk Management Services
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              In today's highly connected environment, organizations face
              increasing threats from fraud, identity theft, cyber risks,
              information leaks and security breaches.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              PROTEAM helps businesses protect their people, assets,
              operations and reputation through advanced investigation,
              intelligence gathering, risk assessment and security services.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our experts conduct thorough due diligence, background
              verification and corporate intelligence investigations
              that enable clients to make informed business decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {services.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="
                      rounded-md
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-md
                      hover:shadow-xl
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
                      <Icon size={22} className="text-blue-600" />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-6">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}