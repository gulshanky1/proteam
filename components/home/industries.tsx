import Image from "next/image";

const industries = [
  {
    name: "Manufacturing",
    icon: "/production.png",
  },
  {
    name: "Logistics & Warehousing",
    icon: "/logistics.png",
  },
  {
    name: "Healthcare",
    icon: "/healthcare.png",
  },
  {
    name: "Retail",
    icon: "/retailer.png",
  },
  {
    name: "IT & Software",
    icon: "/information-technology.png",
  },
  {
    name: "Education",
    icon: "/education.png",
  },
  {
    name: "Hospitality",
    icon: "/hospitality.png",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-6 bg-[#f4f7fb]">

      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">
            Industries We Empower
          </h2>

          <p className="text-gray-500 text-base md:text-lg mt-4">
            Delivering workforce and operational excellence across diverse sectors.
          </p>
        </div>

        {/* Industry Cards */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-7
            gap-4
            items-stretch
          "
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/50
                bg-white/70
                backdrop-blur-xl
                p-5
                flex
                flex-col
                items-center
                text-center
                shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_16px_40px_rgba(31,38,135,0.16)]
                h-[220px]
              "
            >
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />

              {/* Fixed Icon Area */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-lg
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  flex-shrink-0
                  mt-2
                "
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Fixed Text Area */}
              <div className="flex-1 flex items-center justify-center mt-5">
                <h3
                  className="
                    text-[15px]
                    font-semibold
                    text-[#111827]
                    leading-6
                  "
                >
                  {item.name}
                </h3>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}