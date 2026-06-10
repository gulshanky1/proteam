"use client";

import CountUp from "../countup";
import {
  Users,
  Building2,
  Globe2,
} from "lucide-react";

const stats = [
  {
    value: 4000,
    suffix: "+",
    label: "Workforce Deployed",
    icon: <Users size={22} />,
  },
  {
    value: 100,
    suffix: "+",
    label: "Clients Served",
    icon: <Building2 size={22} />,
  },
  {
    value: 28,
    suffix: "",
    label: "PAN INDIA",
    icon: <Globe2 size={22} />,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#06152d]">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Glass Container */}
        <div
          className="
            rounded-2xl
            md:rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            p-4
            sm:p-6
            md:p-8
            lg:p-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              md:gap-6
            "
          >

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-5
                  sm:p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/30
                  hover:bg-white/[0.06]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-blue-500/10
                    to-cyan-400/10
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    w-12
                    h-12
                    md:w-14
                    md:h-14
                    rounded-xl
                    md:rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-cyan-400
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    mb-4
                  "
                >
                  {item.icon}
                </div>

                {/* Value */}
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
                    break-words
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
                    mt-2
                    text-xs
                    sm:text-sm
                    text-gray-400
                    tracking-wide
                  "
                >
                  {item.label}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform
                    duration-500
                    origin-left
                  "
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}