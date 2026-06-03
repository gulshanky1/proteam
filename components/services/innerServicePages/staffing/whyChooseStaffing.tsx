"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock3,
  ShieldCheck,
  BriefcaseBusiness,
  Globe2,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseStaffing() {
  const benefits = [
    {
      icon: Users,
      title: "Extensive Talent Network",
      description:
        "Access qualified professionals across multiple industries and job functions through our vast recruitment ecosystem.",
    },
    {
      icon: Clock3,
      title: "Faster Hiring Process",
      description:
        "Reduce recruitment time through structured sourcing, screening and placement methodologies.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Candidates",
      description:
        "Every candidate undergoes skill assessment, screening and background verification.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Executive Search Expertise",
      description:
        "Specialized hiring solutions for managers, senior executives and leadership positions.",
    },
    {
      icon: Globe2,
      title: "National & Global Reach",
      description:
        "Strong recruitment presence enabling workforce deployment across locations and industries.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth Focus",
      description:
        "We help organizations build productive teams that drive efficiency and long-term success.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
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
            Why Choose Us
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Why Businesses Trust
            <span className="block text-blue-600">
              PROTEAM Staffing Solutions
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            We help organizations identify, recruit and retain
            highly skilled professionals through reliable,
            scalable and compliance-driven staffing services.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

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
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-2xl
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                  transition-all
                  duration-500
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    bg-blue-100/40
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    w-14
                    h-14
                    rounded-2xl
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

                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-7
                    text-sm
                  "
                >
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