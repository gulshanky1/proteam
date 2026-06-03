"use client";

import { motion } from "framer-motion";
import {
ShieldCheck,
Wallet,
FileText,
UserCheck,
Landmark,
BadgeCheck,
CreditCard,
ClipboardCheck,
} from "lucide-react";

export default function EmployeeBenefits() {
const benefits = [
  {
    icon: Landmark,
    title: "EPFO Management",
    description:
      "Coverage for all employees, briefing of EPFO benefits, timely submission of monthly challans with 100% accuracy, UAN generation & KYC updates, PF transfer, withdrawal & nomination assistance, along with complete audit and inspection support.",
  },

  {
    icon: ShieldCheck,
    title: "ESIC Administration",
    description:
      "Complete ESIC coverage for employees, timely TIC generation, employee benefit awareness sessions, accurate monthly challan submission, claim reimbursement support, nomination assistance, and audit & inspection coordination.",
  },

  {
    icon: BadgeCheck,
    title: "Bonus Compliance",
    description:
      "Full adherence to The Payment of Bonus Act, 1965, accurate bonus calculation, timely disbursement of bonus payments, statutory register maintenance (Form D), and preparation & submission of statutory returns as per required periodicity.",
  },

  {
    icon: Wallet,
    title: "Labour Welfare Fund (LWF)",
    description:
      "Compliance with The Labour Welfare Fund Act, 1965, employee coverage wherever applicable, employee benefit briefings, accurate LWF calculations, and preparation & submission of all statutory returns within prescribed timelines.",
  },

  {
    icon: FileText,
    title: "Employee Personal Files",
    description:
      "Comprehensive employee documentation including personal details, KYC records, PF, ESIC & banking documents, leave records, appreciation letters, warning notices, resignation letters and Full & Final declarations.",
  },

  {
    icon: ClipboardCheck,
    title: "Employment Registers",
    description:
      "Maintenance of all statutory employment registers including Muster Roll, Register of Wages, Register of Fine, Register of Damage & Loss, Register of Advance, Register of Overtime and Register of Workmen.",
  },

  {
    icon: CreditCard,
    title: "Salary Processing",
    description:
      "100% transparent payroll operations with direct salary transfer into employee bank accounts, ensuring secure salary disbursement and complete elimination of cash handling risks.",
  },

  {
    icon: UserCheck,
    title: "Full & Final Settlement",
    description:
      "Structured employee exit management including clearance declaration processing and completion of Full & Final settlements within 45 days from submission of the clearance form.",
  },
];

return ( <section className="py-16 md:py-24 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

```
    <div className="text-center max-w-3xl mx-auto mb-14">
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
        Employee Assurance
      </span>

      <h2 className="mt-5 text-2xl font-black text-slate-900">
        What We Ensure
        <span className="block text-blue-600">
          For Every Employee
        </span>
      </h2>

      <p className="mt-5 text-slate-600 leading-8">
        We ensure complete employee welfare, statutory
        compliance, transparent payroll processing and
        professional workforce management.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

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
              delay: index * 0.05,
            }}
            viewport={{
              once: true,
            }}
            className="
              group
              rounded-md
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-md
                bg-blue-50
                flex
                items-center
                justify-center
              "
            >
              <Icon
                size={26}
                className="text-blue-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
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
