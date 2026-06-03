"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  Users,
  Cpu,
  Cog,
  Building2,
} from "lucide-react";

export default function ContractStaffingSolutions() {
  const services = [
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description:
        "Short-term, project-based and seasonal staffing solutions that provide businesses with rapid access to qualified talent.",
    },
    {
      icon: ShieldCheck,
      title: "Managed Service Provider (MSP)",
      description:
        "Comprehensive contingent workforce management programs designed to improve efficiency and reduce operational costs.",
    },
    {
      icon: Users,
      title: "Talent Based Outsourcing",
      description:
        "Outcome-driven outsourcing solutions that provide dedicated teams for operations, support functions and services.",
    },
    {
      icon: Cog,
      title: "Engineering Staffing",
      description:
        "Specialized recruitment and contract staffing for energy, manufacturing, rail, oil & gas, power and infrastructure sectors.",
    },
    {
      icon: Cpu,
      title: "Information Technology",
      description:
        "Deployment of skilled IT professionals including developers, network engineers, analysts, project managers and technical specialists.",
    },
    {
      icon: Building2,
      title: "General Staffing",
      description:
        "Workforce solutions across telecom, FMCG, healthcare, banking, retail, logistics and customer-facing operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">

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
            Workforce Solutions
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Our Contract Staffing
            <span className="block text-blue-600">
              Services Portfolio
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Flexible manpower outsourcing solutions designed
            to help organizations manage workforce demands,
            reduce operational burden and improve productivity.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/50
                  bg-white/70
                  backdrop-blur-2xl
                  shadow-lg
                  p-7
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-blue-50
                    to-cyan-50
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                      group-hover:bg-blue-600
                      transition-all
                    "
                  >
                    <Icon
                      size={26}
                      className="
                        text-blue-600
                        group-hover:text-white
                        transition-all
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-slate-600
                      leading-7
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}