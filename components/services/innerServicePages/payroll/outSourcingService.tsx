"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Clock,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function WhyPayrollOutsourcing() {
  const benefits = [
    {
      icon: Wallet,
      title: "Reduce Operational Costs",
      description:
        "Outsourcing payroll helps organizations significantly reduce administrative and infrastructure costs.",
    },
    {
      icon: Clock,
      title: "Timely Salary Processing",
      description:
        "Ensures accurate payroll processing, timely pay slips and reimbursement statements for employees.",
    },
    {
      icon: Users,
      title: "Lower Employee Turnover Risk",
      description:
        "Professional payroll management improves employee satisfaction and reduces payroll-related issues.",
    },
    {
      icon: ShieldCheck,
      title: "Industry Experts",
      description:
        "Gain access to experienced payroll professionals who understand compliance and statutory requirements.",
    },
    {
      icon: TrendingUp,
      title: "Focus on Core Business",
      description:
        "Businesses can focus on growth and operations while payroll experts manage changing regulations and compliance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Benefits
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            Why Payroll
            <span className="block text-blue-600">
              Outsourcing Services
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Professional payroll outsourcing helps organizations
            improve efficiency, reduce costs and remain compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-md bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
                  <Icon className="text-blue-600" size={22} />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-7">
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
