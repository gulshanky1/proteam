"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, UserCheck, ClipboardCheck, Briefcase, TrendingUp } from "lucide-react";
import { useRef } from "react";

export default function RecruitmentProcess() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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

  // Group into pairs: [[0,1], [2,3], [4]]
  const pairs: (typeof steps)[] = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push(steps.slice(i, i + 2));
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Recruitment Process
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl font-black text-slate-900">
            Our Proven Hiring{" "}
            <span className="block text-blue-600">Methodology</span>
          </h2>
          <p className="mt-5 text-slate-600 leading-7 md:leading-8">
            A structured recruitment framework designed to deliver highly
            qualified talent efficiently and consistently.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Base Line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[4px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600"
          />

          {/* Paired rows */}
          <div className="space-y-10 md:space-y-16">
            {pairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0"
              >
                {pair.map((step, side) => {
                  const Icon = step.icon;
                  const globalIndex = pairIndex * 2 + side;
                  const isLeft = side === 0;

                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.7,
                        delay: globalIndex * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={isLeft ? "lg:pr-16" : "lg:pl-16"}
                    >
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="h-full rounded-[28px] border border-white/60 bg-white/40 backdrop-blur-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_80px_rgba(59,130,246,0.15)] transition-all duration-500"
                      >
                        {/* Icon inside card */}
                        <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.25)] mb-4">
                          <Icon size={20} className="text-blue-600" />
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Center dot per row — desktop only */}
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}