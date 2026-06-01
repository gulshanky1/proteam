"use client";

import CountUp from "../countup";
import {
  Users,
  Building2,
  Globe2,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Workforce Deployed",
    icon: <Users size={22} />,
  },
  {
    value: 30,
    suffix: "+",
    label: "Clients Served",
    icon: <Building2 size={22} />,
  },
  {
    value: 6,
    suffix: "+",
    label: "States Presence",
    icon: <Globe2 size={22} />,
  },
  {
    value: 2017,
    suffix: "",
    label: "Founded Year",
    icon: <CalendarDays size={22} />,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 bg-[#06152d]">

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Container */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            p-5
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  sm:p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white/[0.06]
                  hover:border-blue-400/30
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-cyan-400
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    mb-5
                  "
                >
                  {item.icon}
                </div>

                {/* Number */}
                <h2
                  className="
                    relative
                    z-10
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h2>

                {/* Label */}
                <p
                  className="
                    relative
                    z-10
                    text-gray-400
                    mt-3
                    text-sm
                    tracking-wide
                  "
                >
                  {item.label}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}