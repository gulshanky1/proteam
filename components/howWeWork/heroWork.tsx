"use client";

import {
  Users,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

export default function HowWeWorkHero() {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Workforce Planning",
      description:
        "Understanding client requirements and sourcing qualified manpower.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Compliance & Verification",
      description:
        "Complete documentation, background checks and legal compliance.",
    },
    {
      icon: <BriefcaseBusiness className="w-8 h-8 text-blue-600" />,
      title: "Deployment & Support",
      description:
        "Efficient deployment with continuous supervision and support.",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            Our Working Process
          </span>

          <h1 className="mt-4 text-2xl font-black text-slate-900 leading-tight">
            Structured Workforce Solutions
            <span className="block text-blue-600">
              Built Around Precision & Compliance
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-md leading-8">
            At PROTEAM, we follow a systematic process that combines
            workforce planning, compliance management, deployment,
            supervision and continuous operational support to ensure
            reliable service delivery for every client.
          </p>

        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">

          {steps.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded
                p-8
                border
                border-slate-100
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
                text-center
              "
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-md font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}