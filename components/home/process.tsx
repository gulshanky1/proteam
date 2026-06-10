
import {
  SearchCheck,
  Users,
  Rocket,
  BarChart3,
} from "lucide-react";

const process = [
  {
    title: "Requirement Analysis",
    desc: "Understanding workforce requirements and operational goals.",
    icon: <SearchCheck size={22} />,
  },
  {
    title: "Candidate Screening",
    desc: "Rigorous verification and skill-based candidate evaluation.",
    icon: <Users size={22} />,
  },
  {
    title: "Deployment",
    desc: "Fast onboarding and workforce deployment across locations.",
    icon: <Rocket size={22} />,
  },
  {
    title: "Monitoring",
    desc: "Continuous performance tracking and operational support.",
    icon: <BarChart3 size={22} />,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#f4f7fb]">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl leading-tight font-bold text-[#111827]">
            Our Engagement Process
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Streamlined execution with operational excellence
            at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">

            {process.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/50
                  bg-white/60
                  backdrop-blur-xl
                  p-7
                  shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_16px_40px_rgba(31,38,135,0.15)]
                "
              >

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none"></div>

                {/* Step Number */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    text-5xl
                    font-black
                    text-blue-100
                    group-hover:text-blue-200
                    transition
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-cyan-400
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    mb-6
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-[#111827] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
