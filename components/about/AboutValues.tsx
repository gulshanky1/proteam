import {
  ShieldCheck,
  Scale,
  Users,
  Award,
  Handshake,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with transparency, accountability and ethical business practices in every client engagement.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "Ensuring adherence to labor laws, statutory regulations and industry standards remains our priority.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our workforce is our strength. We focus on safety, development and employee well-being.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality manpower and facility management solutions with measurable results.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Building long-term relationships through trust, collaboration and dependable service delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously improving processes and workforce solutions to meet evolving business needs.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
            Core Values
          </span>

          <h2 className="mt-4 text-2xl  font-black text-slate-900">
            Principles That Guide Every Decision
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Our values define how we serve clients, support employees,
            and build long-term partnerships across industries.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-blue-200
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-blue-600
                    transition-colors
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-blue-600
                      group-hover:text-white
                      transition-colors
                    "
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}