"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function StaffingOverview() {
  const features = [
    {
      icon: Users,
      title: "Qualified Talent Pool",
      desc: "Access to skilled professionals across industries and job functions.",
    },
    {
      icon: Briefcase,
      title: "Executive Search",
      desc: "Leadership hiring and recruitment for managerial and senior positions.",
    },
    {
      icon: Building2,
      title: "Flexible Staffing",
      desc: "Permanent, temporary, project-based and contract staffing solutions.",
    },
    {
      icon: CheckCircle,
      title: "Verified Candidates",
      desc: "Comprehensive screening, assessment and background verification.",
    },
  ];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            md:gap-14
            xl:gap-20
            
          "
        >

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Background Glow */}
            <div
              className="
                absolute
                -top-6
                -left-6
                md:-top-10
                md:-left-10
                w-28
                h-28
                md:w-40
                md:h-40
                bg-blue-100
                rounded-full
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                md:rounded-[32px]
                shadow-2xl
              "
            >
              <Image
                src="/services/staffing-overview.jpg"
                alt="Staffing Services"
                width={800}
                height={700}
                className="
                  w-full
                  h-[260px]
                  sm:h-[350px]
                  md:h-[450px]
                
                  object-cover
                "
              />
            </div>

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >

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
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Staffing Solutions
            </span>

            <h2
              className="
                mt-5
                text-2xl
                font-black
                text-slate-900
                leading-tight
              "
            >
              Strategic Staffing
              <span className="block text-blue-600">
                Solutions for Modern Enterprises
              </span>
            </h2>

            <p
              className="
                mt-4
                text-slate-600
                text-sm
                sm:text-base
                leading-7
              "
            >
              At PROTEAM, we provide comprehensive staffing
              and recruitment solutions designed to help
              organizations identify, attract and retain
              highly qualified professionals.
            </p>

            <p
              className="
                mt-2
                text-slate-600
                text-sm
                sm:text-base
                leading-7
              "
            >
              Through our extensive talent network,
              industry expertise and proven recruitment
              methodologies, we connect businesses with
              candidates who possess the right skills,
              attitude and commitment to contribute
              to organizational success.
            </p>

            <p
              className="
                mt-2
                text-slate-600
                text-sm
                sm:text-base
                leading-7
              "
            >
              Whether you require permanent recruitment,
              temporary staffing, project-based hiring
              or executive search services, our team
              ensures reliable workforce solutions
              aligned with your business objectives.
            </p>

            {/* Feature Cards */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                mt-5
              "
            >

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      group
                      bg-white/70
                      backdrop-blur-xl
                      border
                      border-white/60
                      rounded-[24px]
                      p-4
                      md:p-5
                      shadow-lg
                      hover:-translate-y-2
                      hover:shadow-blue-100
                      transition-all
                      duration-500
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={22}
                        className="text-blue-600"
                      />
                    </div>

                    <h3
                      className="
                        mt-4
                        text-base
                        font-bold
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        sm:text-sm
                        text-slate-600
                        leading-6
                      "
                    >
                      {item.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}