// src/components/WhyChoose.tsx

import {
  ShieldCheck,
  MapPinned,
  Users,
  Zap,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Experience",
    desc: "Delivering excellence since 2017 with a proven track record of scalability.",
    icon: <BadgeCheck size={18} />,
  },
  {
    title: "Compliance",
    desc: "100% adherence to Labor Laws, GST, PF, and local regulations.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "PAN India",
    desc: "Network coverage across 6+ major states with regional support hubs.",
    icon: <MapPinned size={18} />,
  },
  {
    title: "Skilled Workforce",
    desc: "Rigorous background verification and job-specific skill training.",
    icon: <Users size={18} />,
  },
  {
    title: "Fast Deployment",
    desc: "Proprietary sourcing engine for rapid workforce turnaround.",
    icon: <Zap size={18} />,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock operational assistance for mission-critical tasks.",
    icon: <Headphones size={18} />,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#f3f4f6] py-24 px-6">
      
      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl leading-tight font-bold text-[#111827]">
            The PROTEAM Advantage
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Why India's leading enterprises trust us for
            their operational stability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/40
                bg-white/50
                backdrop-blur-xl
                p-7
                shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                hover:shadow-[0_8px_40px_rgba(31,38,135,0.16)]
                transition-all
                duration-500
                hover:-translate-y-1
              "
            >
              
              {/* Glass Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 pointer-events-none"></div>

              {/* Icon */}
              <div className="
                relative
                z-10
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-400
                flex
                items-center
                justify-center
                mb-5
                text-white
                shadow-lg
              ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-[#111827] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm leading-7">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}