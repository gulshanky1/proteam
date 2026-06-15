"use client";

import Image from "next/image";

const features = [
  {
    title: "ISO Certified",
    desc: "Demonstrating our commitment to delivering high-quality services through robust management systems while maintaining environmentally responsible and sustainable business practices. ISO 9001:2015 & ISO 14001:2015 certified.",
    icon: "/iso-9001.png",
  },
  {
    title: "100% Compliance",
    desc: "Full adherence to Labour Laws, GST, PF, ESIC and local statutory regulations across all operations.",
    icon: "/compliant.png",
  },
  {
    title: "PAN India Presence",
    desc: "Strong operational network with regional support hubs serving clients across multiple states in India.",
    icon: "/india.png",
  },
  {
    title: "Skilled Workforce",
    desc: "Professionally trained manpower backed by rigorous background verification and skill development programs.",
    icon: "/skill-development.png",
  },
  {
    title: "Fast Deployment",
    desc: "Rapid workforce mobilization with deployment capabilities within 48 hours for urgent requirements.",
    icon: "/fast-delivery.png",
  },
  {
    title: "24×7 Support",
    desc: "Round-the-clock operational assistance ensuring uninterrupted service and client satisfaction.",
    icon: "/support.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex px-4 py-2 rounded bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            The PROTEAM Advantage
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Why leading organizations trust PROTEAM for workforce,
            facility management and business support services.
          </p>
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-7 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}