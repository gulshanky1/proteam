"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Wallet,
  Users,
  ShieldCheck,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function WhyChooseContractual() {
  const benefits = [
    {
      icon: Clock3,
      title: "Faster Workforce Deployment",
      description:
        "Quick access to skilled professionals for urgent projects, seasonal demand and business expansion.",
    },
    {
      icon: Wallet,
      title: "Reduced Hiring Costs",
      description:
        "Eliminate recruitment overheads and optimize workforce expenses with flexible staffing models.",
    },
    {
      icon: Users,
      title: "Access to Specialized Talent",
      description:
        "Get highly qualified professionals across engineering, IT, operations and support functions.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Risk Management",
      description:
        "Complete management of payroll, statutory compliance, attendance and workforce administration.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Workforce",
      description:
        "Increase or reduce workforce strength based on project requirements and business cycles.",
    },
    {
      icon: Briefcase,
      title: "Focus on Core Business",
      description:
        "Allow your teams to concentrate on strategic goals while we manage workforce operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">

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
            Business Benefits
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Why Organizations Prefer
            <span className="block text-blue-600">
              Contractual Manpower
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Modern businesses require agility, flexibility
            and access to skilled talent. Our contractual
            manpower solutions help organizations remain
            competitive while maintaining operational efficiency.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-md
                  bg-white/70
                  backdrop-blur-2xl
                  border
                  border-slate-200
                  p-7
                  shadow-lg
                  hover:shadow-blue-100
                  transition-all
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-50
                    via-cyan-50
                    to-white
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-14
                      h-14
                      rounded-md
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
                      text-lg
                      md:text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-slate-600
                      leading-7
                      text-sm
                      md:text-base
                    "
                  >
                    {item.description}
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