"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Users,
  GraduationCap,
} from "lucide-react";

export default function HousekeepingOverview() {
  const features = [
    {
      icon: Clock3,
      title: "24×7 Workforce Support",
      description:
        "Our housekeeping teams work around the clock, allowing your organization to focus on its core business operations without interruption.",
    },
    {
      icon: ShieldCheck,
      title: "Verified & Compliant Staff",
      description:
        "Every employee undergoes a strong verification process and is covered under ESIC, EPF and applicable labour regulations.",
    },
    {
      icon: Users,
      title: "Corporate & Domestic Services",
      description:
        "We provide trained manpower for both corporate and domestic environments with proper uniforms and professional equipment.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description:
        "Our in-house training department continuously upgrades workforce skills through modern cleaning techniques and industry best practices.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100/40 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                absolute
                -top-6
                -left-6
                w-40
                h-40
                bg-blue-200/30
                rounded-full
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-md
                border
                border-white/30
                bg-white/30
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/services/housekeeping-overview.jpg"
                alt="Housekeeping Services"
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
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-md
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
              Housekeeping Services
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
              Professional Housekeeping
              <span className="block text-blue-600">
                Solutions for Every Environment
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              With years of experience in providing professional
              housekeeping manpower, PROTEAM helps organizations
              maintain clean, hygienic and productive workplaces.
              Our workforce operates efficiently while allowing
              businesses to focus on their core strengths.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              We serve both corporate and domestic sectors by
              deploying trained personnel equipped with proper
              uniforms, tools and operational support systems.
              Every worker is trained to adapt to your work culture
              and deliver consistent service quality.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our dedicated help desk, employee verification process,
              ongoing training programs and compliance management
              ensure reliable housekeeping solutions backed by
              professionalism and accountability.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      rounded-md
                      border
                      border-white/40
                      bg-white/70
                      backdrop-blur-xl
                      p-5
                      shadow-lg
                      transition-all
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-md
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