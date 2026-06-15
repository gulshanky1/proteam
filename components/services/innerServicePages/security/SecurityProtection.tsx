"use client";

import { motion } from "framer-motion";
import {
Shield,
Users,
Building2,
BadgeCheck,
Globe,
Lock,
LucideIcon,
} from "lucide-react";
import { ReactElement } from "react";

interface HighlightItem {
icon: LucideIcon;
title: string;
desc: string;
}

export default function SecurityProtection(): ReactElement {
const highlights: HighlightItem[] = [
{
icon: Shield,
title: "24×7 Security Coverage",
desc: "Round-the-clock protection for residential, commercial and industrial facilities.",
},
{
icon: Users,
title: "Rapid Emergency Response",
desc: "Skilled in crisis control, evacuation, and first aid.",
},
{
icon: BadgeCheck,
title: "Expert Trained Personnel",
desc: "Training delivered by professionals from defence, police and paramilitary backgrounds.",
},
{
icon: Lock,
title: "Asset Protection",
desc: "Protection of physical infrastructure, equipment and sensitive information.",
},
{
icon: Globe,
title: "Pan India Operations",
desc: "Extensive field network supporting organizations across India.",
},
{
icon: Building2,
title: "Strict Supervision & Reporting",
desc: " Real-time monitoring, patrol reports, and transparent client communication.",
},
];

const industries: string[] = [
"Personal Security",
"Residential Societies",
"Offices and Corporate parks",
"Manufacturing facilities and Factories",
"Warehouses ans Logistics parks",
"Government institutions and others",


];

return ( <section className="py-16 md:py-24 bg-slate-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-14">
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
        Security Services
      </span>

      <h2 className="mt-5 text-2xl font-black text-slate-900">
        Security Guarding &
        <span className="block text-blue-600">
          Executive Protection
        </span>
      </h2>

      <p className="mt-5 text-slate-600 leading-8">
        Our objective is to provide high-level security to your
        premises and safeguard your physical and digital assets.
        We identify and mitigate all risks, present and foreseeable,
        using our expertise, experience and dedicated workforce.
      </p>
    </div>

    {/* Intro Content */}
    <div className="rounded-md border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-12">
      <p className="text-slate-600 leading-8">
        From companies to residents, everyone needs reliable
        security. Our security guarding and executive protection
        services are designed to protect employees, visitors,
        physical assets and digital infrastructure at all times.
      </p>

      <p className="mt-4 text-slate-600 leading-8">
        All security personnel are professionally trained by
        experts from law enforcement, defence and paramilitary
        backgrounds. They are equipped to handle emergencies,
        security incidents and day-to-day protection duties
        with professionalism and discipline.
      </p>

      <p className="mt-4 text-slate-600 leading-8">
        PROTEAM has extensive experience in corporate intelligence,
        risk mitigation and security management. Our pan-India
        field operatives bring decades of expertise from premier
        government security and investigation agencies.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className="
              rounded-md
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-md bg-blue-50 flex items-center justify-center">
              <Icon
                size={28}
                className="text-blue-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-7">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>

    {/* Industries */}
    <div
      className="
        rounded-md
        bg-gradient-to-r
        from-[#081b3a]
        via-[#0c2e63]
        to-[#0d4b9c]
        p-8
        md:p-10
        text-white
      "
    >
      <h3 className="text-xl font-bold">
        Security Services We Provide
      </h3>

      <p className="mt-3 text-blue-100 max-w-3xl">
        We have successfully delivered security and risk
        management solutions across multiple industries,
        supporting organizations of all sizes.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="
              rounded-md
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              px-4
              py-4
              text-sm
              font-medium
            "
          >
            {industry}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

);
}
