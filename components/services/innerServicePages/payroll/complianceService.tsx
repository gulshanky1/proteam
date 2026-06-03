"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Landmark,
  BadgeCheck,
} from "lucide-react";

export default function ComplianceSection() {
  const compliances = [
    "Registered under various Government Authorities",
    "100% Statutory Compliance Management",
    "Timely Submission of Returns & Challans",
    "Professional Audit & Inspection Support",
    "Labour Law Compliance Monitoring",
    "Government Liaison & Documentation Support",
  ];

  return (
    <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 ">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-2 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Compliance
            </span>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              Statutory Compliance &
              <span className="block text-blue-600">
                Regulatory Excellence
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We believe fair business practices are the foundation
              of every successful organization. Our compliance team
              ensures all statutory obligations are fulfilled accurately
              and on time.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Whether your organization is small, medium or large,
              our experts manage complex compliance requirements,
              reducing legal risks and administrative burdens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-md bg-slate-50 border border-slate-200 p-8"
          >
            <div className="space-y-5">

              {compliances.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center">
                    <ShieldCheck
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="rounded-md bg-white border p-5 text-center">
                <Landmark className="mx-auto text-blue-600" />
                <p className="mt-3 font-bold text-slate-900">
                  Govt Registered
                </p>
              </div>

              <div className="rounded-md bg-white border p-5 text-center">
                <FileCheck className="mx-auto text-blue-600" />
                <p className="mt-3 font-bold text-slate-900">
                  Audit Ready
                </p>
              </div>

              <div className="rounded-md bg-white border p-5 text-center">
                <BadgeCheck className="mx-auto text-blue-600" />
                <p className="mt-3 font-bold text-slate-900">
                  100% Compliance
                </p>
              </div>

              <div className="rounded-md bg-white border p-5 text-center">
                <ShieldCheck className="mx-auto text-blue-600" />
                <p className="mt-3 font-bold text-slate-900">
                  Expert Support
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}