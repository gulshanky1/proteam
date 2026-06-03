"use client";

import {
motion,
useScroll,
useTransform,
useSpring,
} from "framer-motion";
import {
Search,
UserCheck,
ClipboardCheck,
Briefcase,
TrendingUp,
} from "lucide-react";
import { useRef } from "react";

export default function RecruitmentProcess() {
const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
target: sectionRef,
offset: ["start 70%", "end 30%"],
});

const smoothProgress = useSpring(
scrollYProgress,
{
stiffness: 120,
damping: 20,
}
);

const lineHeight = useTransform(
smoothProgress,
[0, 1],
["0%", "100%"]
);

const steps = [
{
title: "Identifying Candidates",
icon: Search,
description:
"We source qualified professionals through job portals, referrals, networking channels and our recruitment database.",
},
{
title: "Shortlisting & Screening",
icon: UserCheck,
description:
"Candidates are evaluated based on skills, experience, culture fit and background verification.",
},
{
title: "Interview Coordination",
icon: ClipboardCheck,
description:
"Scheduling, communication and assessment management to ensure smooth hiring.",
},
{
title: "Placement & Deployment",
icon: Briefcase,
description:
"Selected candidates are deployed quickly according to project and business requirements.",
},
{
title: "Performance Monitoring",
icon: TrendingUp,
description:
"Continuous follow-up ensures workforce quality, productivity and long-term success.",
},
];

return ( <section
   ref={sectionRef}
   className="relative py-16 md:py-24 bg-white overflow-hidden"
 > <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

```
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">

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
        Recruitment Process
      </span>

      <h2
        className="
          mt-5
          text-2xl
          font-black
          text-slate-900
        "
      >
        Our Proven Hiring
        <span className="block text-blue-600">
          Methodology
        </span>
      </h2>

      <p className="mt-5 text-slate-600 leading-7 md:leading-8">
        A structured recruitment framework designed
        to deliver highly qualified talent efficiently
        and consistently.
      </p>

    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Base Line */}
      <div
        className="
          absolute
          left-6
          lg:left-1/2
          lg:-translate-x-1/2
          top-0
          bottom-0
          w-[2px]
          bg-slate-200
        "
      />

      {/* Animated Line */}
      <motion.div
        style={{
          height: lineHeight,
        }}
        className="
          absolute
          left-6
          lg:left-1/2
          lg:-translate-x-1/2
          top-0
          w-[4px]
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          via-blue-500
          to-indigo-600
        "
      />

      {/* Cards */}
      <div className="space-y-12 md:space-y-20">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`
                relative
                flex
                ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }
              `}
            >

              {/* Timeline Icon */}
              <div
                className="
                  absolute
                  left-6
                  lg:left-1/2
                  lg:-translate-x-1/2
                  z-20
                  -translate-y-1
                "
              >
                <motion.div
                  whileInView={{
                    scale: [0.8, 1.15, 1],
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    w-12
                    h-12
                    md:w-16
                    md:h-16
                    rounded-full
                    bg-white
                    border-4
                    border-blue-500
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(59,130,246,0.35)]
                  "
                >
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
                  ml-20
                  lg:ml-0
                  w-full
                  lg:w-[45%]
                  rounded-[28px]
                  border
                  border-white/60
                  bg-white/40
                  backdrop-blur-2xl
                  p-6
                  md:p-8
                  shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_25px_80px_rgba(59,130,246,0.15)]
                  transition-all
                  duration-500
                "
              >

                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    md:text-base
                    text-slate-600
                    leading-7
                  "
                >
                  {step.description}
                </p>

              </motion.div>

            </motion.div>
          );
        })}

      </div>

    </div>
  </div>
</section>


);
}
