"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Factory,
  Building2,
  HeartPulse,
  Banknote,
  Truck,
  Radio,
  Zap,
} from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Information Technology",
      icon: Cpu,
      image: "/it.png",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      image: "/manufacturing.png",
    },
    {
      title: "Engineering",
      icon: Building2,
      image: "/engineering.png",
    },
    {
      title: "Healthcare",
      icon: HeartPulse,
      image: "/medical.png",
    },
    {
      title: "Banking & Finance",
      icon: Banknote,
      image: "/banking.png",
    },
    {
      title: "Logistics",
      icon: Truck,
      image: "/Logisticss.png",
    },
    {
      title: "Telecom",
      icon: Radio,
      image: "/telecom.png",
    },
    {
      title: "Energy & Power",
      icon: Zap,
      image: "/energy.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">

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
            Industry Expertise
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Industries We
            <span className="block text-blue-600">
              Serve Successfully
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            We provide contractual manpower and workforce
            management solutions across diverse industries,
            helping organizations access qualified talent
            wherever they operate.
          </p>

        </div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  h-[280px]
                  overflow-hidden
                  rounded-md
                  shadow-xl
                "
              >

                {/* Background Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-black/10
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    p-6
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-md
                      bg-white/15
                      backdrop-blur-xl
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      mb-5
                    "
                  >
                    <Icon
                      size={26}
                      className="text-white"
                    />
                  </div>

                  <h3
                    className="
                      text-white
                      text-xl
                      font-bold
                    "
                  >
                    {industry.title}
                  </h3>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}