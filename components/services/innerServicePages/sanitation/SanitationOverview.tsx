"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  ClipboardCheck,
  Factory,
} from "lucide-react";

export default function SanitationOverview() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Food Safety Compliance",
      desc: "Maintaining hygienic environments that support safety and regulatory standards.",
    },
    {
      icon: Droplets,
      title: "Advanced Sanitization",
      desc: "Professional cleaning and sanitization methods for critical environments.",
    },
    {
      icon: ClipboardCheck,
      title: "Inspection & Validation",
      desc: "Regular audits, inspections and verification procedures.",
    },
    {
      icon: Factory,
      title: "Industrial Expertise",
      desc: "Sanitation solutions for manufacturing, food processing and commercial facilities.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/services/sanitation-overview.jpg"
                alt="Sanitation Services"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-blue-700
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Sanitation Services
            </span>

            <h2
              className="
                mt-5
                text-2xl
                font-black
                text-slate-900
                leading-tight
              "
            >
              Professional Cleaning &
              <span className="block text-blue-600">
                Sanitation Solutions
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              PROTEAM delivers structured sanitation services
              designed to maintain hygienic, compliant and safe
              environments across food processing facilities,
              manufacturing plants, commercial establishments
              and industrial operations.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our sanitation programs combine cleaning,
              sanitizing, inspection and validation procedures
              to ensure the highest standards of hygiene and
              operational safety.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              By following internationally recognized sanitation
              methodologies, we help organizations reduce risks,
              improve compliance and maintain superior workplace
              cleanliness.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white/70
                      backdrop-blur-xl
                      p-5
                      shadow-lg
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={22}
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-6">
                      {item.desc}
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