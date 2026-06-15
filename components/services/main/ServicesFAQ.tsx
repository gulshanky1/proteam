"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faq = [
  {
    q: "How does PROTEAM ensure statutory compliance?",
    a: "Our dedicated compliance team monitors labor laws, PF, ESIC, payroll regulations, and statutory requirements to ensure complete adherence and risk-free operations.",
  },
  {
    q: "Which industries does PROTEAM serve?",
    a: "We provide workforce, facility management, security, and payroll solutions across manufacturing, logistics, healthcare, retail, corporate offices, warehousing, and industrial sectors.",
  },
  {
    q: "Can PROTEAM manage payroll for large organizations?",
    a: "Yes. Our payroll management services support organizations of all sizes with salary processing, tax compliance, attendance integration, and reporting.",
  },
  {
    q: "How quickly can manpower be deployed?",
    a: "Depending on project requirements and location, our recruitment and deployment teams can mobilize qualified personnel within a 48-hour timeframe.",
  },
  {
    q: "Do you provide customized workforce solutions?",
    a: "Absolutely. We assess operational requirements and create tailored staffing and facility management solutions aligned with business objectives.",
  },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
            Answers to Common Client Queries
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Learn more about our workforce management, payroll,
            compliance, security, and facility management services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded
                  border
                  border-slate-200
                  shadow-sm
                  overflow-hidden
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-5
                    md:p-6
                    text-left
                  "
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {item.q}
                  </span>

                  {isOpen ? (
                    <Minus
                      size={20}
                      className="text-blue-600 shrink-0"
                    />
                  ) : (
                    <Plus
                      size={20}
                      className="text-slate-500 shrink-0"
                    />
                  )}
                </button>

                <div
                  className={`
                    transition-all
                    duration-300
                    overflow-hidden
                    ${
                      isOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-5 md:px-6 pb-6 text-slate-600 leading-7">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}