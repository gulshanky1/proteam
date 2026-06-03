"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Monitor,
  Coffee,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CommercialOfficeCleaning() {
  const services = [
    "General Dusting",
    "Floor Sweeping & Mopping",
    "Washroom Maintenance",
    "Vacuum Cleaning",
    "Computer Cleaning",
    "Pantry Services",
    "Reception Area Cleaning",
    "Escalator Cleaning",
    "Elevator Cleaning",
    "External Surface Cleaning",
  ];

  return (
    <section className="py-16  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 ">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
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
              Commercial Office Cleaning
            </span>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              Professional Cleaning
              <span className="block text-blue-600">
                For Modern Workspaces
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Our commercial office cleaning services are
              designed to maintain clean, organized and
              productive workplaces while enhancing employee
              comfort and creating a positive impression for
              visitors and clients.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              From workstations and reception areas to
              elevators, escalators and external surfaces,
              our trained housekeeping teams ensure every
              area receives meticulous attention.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Every contract is customized according to your
              business requirements, ensuring maximum value,
              operational efficiency and complete client
              satisfaction.
            </p>

            {/* Service List */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-md
                    border
                    border-slate-200
                    bg-white
                    p-3
                    shadow-sm
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-600 flex-shrink-0"
                  />

                  <span className="text-slate-700 text-sm font-medium">
                    {service}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="rounded-md bg-blue-50 p-4 text-center">
                <Building2
                  className="mx-auto text-blue-600"
                  size={24}
                />
                <div className="mt-2 text-sm text-black">
                  Corporate Offices
                </div>
              </div>

              <div className="rounded-md bg-blue-50 p-4 text-center">
                <Monitor
                  className="mx-auto text-blue-600"
                  size={24}
                />
                <div className="mt-2 text-sm  text-black">
                  IT Workspaces
                </div>
              </div>

              <div className="rounded-md bg-blue-50 p-4 text-center">
                <Coffee
                  className="mx-auto text-blue-600"
                  size={24}
                />
                <div className="mt-2 text-sm text-black">
                  Pantry Areas
                </div>
              </div>

            </div>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-md
                border
                border-white/30
                bg-white/30
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/services/commercial-office-cleaning.jpg"
                alt="Commercial Office Cleaning"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                rounded-md
                border
                border-white/30
                bg-white/70
                backdrop-blur-xl
                p-5
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="text-blue-600"
                  size={22}
                />

                <div>
                  <h4 className="font-bold text-slate-900">
                    Tailor-Made Cleaning Solutions
                  </h4>

                  <p className="text-sm text-slate-600 mt-1">
                    Customized housekeeping programs built
                    around your business requirements.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}