"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-md blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/services/contractual/overview.jpg"
                alt="Contractual Manpower Services"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              Contractual Manpower
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
              Flexible Workforce
              <span className="block text-blue-600">
                Solutions for Every Business
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Contractual manpower services enable businesses
              to access skilled professionals without the
              complexities of direct recruitment and workforce
              administration.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              At PROTEAM, we provide complete manpower
              outsourcing solutions, allowing organizations
              to improve efficiency, reduce operational burden,
              and maintain workforce flexibility according
              to project requirements.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              From engineering and IT staffing to general
              workforce deployment, we deliver qualified
              professionals supported by payroll management,
              compliance handling and continuous workforce
              supervision.
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
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      bg-white/70
                      backdrop-blur-2xl
                      border
                      border-slate-200
                      rounded-md
                      p-5
                      shadow-lg
                      hover:-translate-y-1
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