
import {
  Building2,
  ShieldCheck,
  Briefcase,
  Cpu,
  GraduationCap,
  Hotel,
  Building2Icon,
} from "lucide-react";
import Image from "next/image";

const industries = [
  {
    name: "Manufacturing",
    icon: <Image
            src="/production.png"
            alt="Manufacturing Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "Logistics & Warehousing",
    icon: <Image
            src="/logistics.png"
            alt="Logistics & Warehousing Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "Healthcare",
    icon: <Image
            src="/healthcare.png"
            alt="Healthcare Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "Retail",
    icon: <Image
            src="/retailer.png"
            alt="Retail Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "IT & Software",
    icon: <Image
            src="/information-technology.png"
            alt="IT & Software Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "Education",
    icon: <Image
            src="/education.png"
            alt="Education Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
  {
    name: "Hospitality",
    icon: <Image
            src="/hospitality.png"
            alt="Hospitality Icon"
            width={28}
            height={28}
            className="w-10 h-10 object-contain"
          />,
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#f4f7fb]">

      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl leading-tight font-bold text-[#111827]">
            Industries We Empower
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Delivering workforce and operational excellence
            across diverse sectors.
          </p>
        </div>

        {/* Industry Cards */}
        <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-4
    xl:grid-cols-7
    gap-4
  "
>

          {industries.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded
                border
                border-white/50
                bg-white/60
                backdrop-blur-xl
                p-7
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_16px_40px_rgba(31,38,135,0.16)]
              "
            >

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

              {/* Icon Circle */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  mb-5
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >
                {item.icon}
              </div>

              {/* Industry Name */}
              <h3 className="relative z-10 text-[15px] font-semibold text-[#111827] leading-6">
                {item.name}
              </h3>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
