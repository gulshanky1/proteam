"use client";

import { motion } from "framer-motion";
import { Brush, ShieldCheck } from "lucide-react";

export default function CleaningVsSanitizing() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

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
            Hygiene Standards
          </span>

          <h2
            className="
              mt-5
              text-2xl
              font-black
              text-slate-900
            "
          >
            Cleaning vs
            <span className="block text-blue-600">
              Sanitizing
            </span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Although often used interchangeably, cleaning and
            sanitizing serve different purposes in maintaining
            a safe and hygienic environment.
          </p>

        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Cleaning */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              rounded-[32px]
              bg-white/70
              backdrop-blur-2xl
              border
              border-slate-200
              p-8
              shadow-xl
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
              "
            >
              <Brush
                size={28}
                className="text-blue-600"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Cleaning
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Cleaning focuses on removing visible dirt,
              dust, debris, grease, food residues and
              contaminants from surfaces.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Removes physical contaminants</li>
              <li>✓ Improves appearance and hygiene</li>
              <li>✓ Uses detergents and cleaning agents</li>
              <li>✓ Essential before sanitization</li>
            </ul>

          </motion.div>

          {/* Sanitizing */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              rounded-[32px]
              bg-gradient-to-br
              from-blue-600
              via-blue-700
              to-slate-900
              text-white
              p-8
              shadow-2xl
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
              "
            >
              <ShieldCheck size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Sanitizing
            </h3>

            <p className="mt-4 text-blue-100 leading-8">
              Sanitizing focuses on reducing harmful
              microorganisms, bacteria and pathogens
              to safe levels after cleaning.
            </p>

            <ul className="mt-6 space-y-3 text-blue-100">
              <li>✓ Eliminates harmful microorganisms</li>
              <li>✓ Reduces contamination risks</li>
              <li>✓ Uses approved sanitizers</li>
              <li>✓ Ensures regulatory compliance</li>
            </ul>

          </motion.div>

        </div>

        {/* Bottom Highlight */}
        <div
          className="
            mt-12
            rounded-[32px]
            bg-slate-50
            border
            border-slate-200
            p-8
            text-center
          "
        >
          <h3 className="text-xl font-bold text-slate-900">
            Why Both Are Important
          </h3>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-8">
            Cleaning removes physical contaminants while
            sanitizing destroys microorganisms. Together,
            they create a safe, compliant and hygienic
            environment for employees, visitors and
            operational processes.
          </p>
        </div>

      </div>
    </section>
  );
}