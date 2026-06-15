"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Truck,
  Brush,
  Building2,
  Bath,
  ScanSearch,
} from "lucide-react";

export default function MechanizedCleaning() {
  const services = [
    {
      icon: Brush,
      title: "Floor Scrubbing",
      description:
        "Advanced scrubbing machines remove dirt, stains and contaminants from all floor surfaces.",
    },
    {
      icon: Sparkles,
      title: "Floor Polishing",
      description:
        "Professional polishing solutions restore shine and improve floor durability.",
    },
    {
      icon: ScanSearch,
      title: "Vacuum Cleaning",
      description:
        "High-performance vacuum systems ensure deep cleaning of carpets and interior spaces.",
    },
    {
      icon: Truck,
      title: "Road Cleaning",
      description:
        "Mechanized cleaning of roads, pathways and external areas for large facilities.",
    },
    {
      icon: Bath,
      title: "Toilet Cleaning",
      description:
        "Specialized equipment for deep cleaning and sanitization of washroom facilities.",
    },
    {
      icon: Building2,
      title: "Office & Canteen Cleaning",
      description:
        "Efficient cleaning of office workspaces, cafeterias and employee common areas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl" />

            <div
              className="
                relative
                rounded-md
                overflow-hidden
                border
                border-white/30
                bg-white/30
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/house3.jpeg"
                alt="Mechanized Cleaning Services"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
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
              Mechanized Cleaning
            </span>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              Technology Driven
              <span className="block text-blue-600">
                Cleaning Solutions
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We leverage modern cleaning technologies,
              advanced machinery and specialized equipment
              to deliver superior cleaning quality within
              minimal timeframes.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our mechanized cleaning approach improves
              efficiency, reduces manpower effort and
              ensures consistent cleanliness across
              commercial, industrial and institutional
              environments.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              From floor scrubbing and polishing to road,
              office and washroom cleaning, our equipment
              provides reliable, high-quality results while
              maintaining operational productivity.
            </p>
          </motion.div>

        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

          {services.map((service, index) => {
            const Icon = service.icon;

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
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-md
                  border
                  border-white/40
                  bg-white/70
                  backdrop-blur-xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-md
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

                <h3 className="mt-4 font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-7">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}