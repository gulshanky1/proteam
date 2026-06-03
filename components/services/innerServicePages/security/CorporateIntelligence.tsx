"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
ShieldAlert,
SearchCheck,
Fingerprint,
FileSearch,
Scale,
Database,
LucideIcon,
} from "lucide-react";

interface ServiceItem {
icon: LucideIcon;
title: string;
desc: string;
}

export default function CorporateIntelligence(): ReactElement {
const services: ServiceItem[] = [
{
icon: ShieldAlert,
title: "Fraud Investigation",
desc: "Professional investigation of fraud, cheating, misconduct and security breaches.",
},
{
icon: Fingerprint,
title: "Identity Verification",
desc: "Comprehensive identity validation and background intelligence gathering.",
},
{
icon: Database,
title: "Data Breach Investigation",
desc: "Detection, analysis and mitigation of data security incidents.",
},
{
icon: SearchCheck,
title: "Due Diligence",
desc: "Corporate due diligence and business partner verification services.",
},
{
icon: FileSearch,
title: "Background Checks",
desc: "Thorough verification of individuals, vendors and prospective partners.",
},
{
icon: Scale,
title: "Legal Support",
desc: "Guidance from experienced legal and financial professionals.",
},
];

return ( <section className="py-16 md:py-24 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

```
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
        Corporate Intelligence
      </span>

      <h2 className="mt-5 text-2xl font-black text-slate-900">
        Risk Mitigation &
        <span className="block text-blue-600">
          Investigation Services
        </span>
      </h2>

      <p className="mt-5 text-slate-600 leading-8">
        In today's connected world, fraud, identity theft,
        data breaches and business misconduct present major
        risks. PROTEAM provides corporate intelligence,
        due diligence and investigative services to help
        organizations make informed decisions and protect
        their interests.
      </p>
    </div>

    <div className="rounded-md border border-slate-200 bg-slate-50 p-6 md:p-8 mb-10">
      <p className="text-slate-600 leading-8">
        If you suspect fraud, cheating, security violations
        or data breaches, our experts discreetly investigate
        incidents, uncover facts and assist in taking
        appropriate legal and preventive actions.
      </p>

      <p className="mt-4 text-slate-600 leading-8">
        Supported by experienced lawyers, financial experts
        and intelligence professionals, we conduct
        comprehensive background verification, corporate
        due diligence and risk assessments for businesses
        across industries.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {services.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="
              rounded-md
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              hover:shadow-xl
              transition-all
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

  </div>
</section>

);
}
