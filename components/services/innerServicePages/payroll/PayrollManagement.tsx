"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Landmark,
  BadgeCheck,
  Receipt,
  Users,
} from "lucide-react";

export default function PayrollCompliance() {
  const compliances = [
    {
      icon: Landmark,
      title: "Provident Fund (PF)",
      desc: "Complete PF administration including UAN generation, KYC updates, transfers, withdrawals and monthly challan submissions.",
    },
    {
      icon: ShieldCheck,
      title: "Employee State Insurance (ESI)",
      desc: "Coverage management, TIC generation, claim processing, reimbursements and statutory compliance support.",
    },
    {
      icon: FileCheck,
      title: "Professional Tax (PT)",
      desc: "Accurate tax calculations, filings and adherence to state-specific statutory regulations.",
    },
    {
      icon: BadgeCheck,
      title: "Labour Welfare Fund (LWF)",
      desc: "Coverage, calculations, employee awareness and timely statutory submissions.",
    },
    {
      icon: Receipt,
      title: "Bonus Management",
      desc: "Bonus calculations and disbursements as per The Payment of Bonus Act, 1965.",
    },
    {
      icon: Users,
      title: "Employee Records",
      desc: "Comprehensive maintenance of KYC, payroll, leave, PF, ESIC and employment records.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
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
            Compliance Management
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            Statutory Compliance &
            <span className="block text-blue-600">
              Regulatory Management
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Our dedicated compliance team ensures complete adherence
            to government regulations, helping organizations reduce
            risks while maintaining seamless payroll operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

          {compliances.map((item, index) => {
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
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white/50
                  rounded-3xl
                  p-6
                  shadow-lg
                  hover:shadow-blue-100
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >
                  <Icon
                    className="text-blue-600"
                    size={26}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7 text-sm">
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
