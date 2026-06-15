import {
  BriefcaseBusiness,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

const leaders = [
  {
    icon: BriefcaseBusiness,
    title: "Operations Leadership",
    description:
      "Ensuring efficient workforce deployment, project execution and service delivery across all client locations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Leadership",
    description:
      "Maintaining statutory compliance, labor law adherence, payroll governance and risk management.",
  },
  {
    icon: Users,
    title: "Workforce Management",
    description:
      "Focused on recruitment, onboarding, employee engagement and workforce performance optimization.",
  },
  {
    icon: Building2,
    title: "Security & Facility Management",
    description:
      "Driving excellence in housekeeping, sanitation, security and integrated facility operations.",
  },
];

export default function AboutLeadership() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#081b3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-blue-300 font-semibold uppercase tracking-[0.25em] text-xs">
            Leadership & Expertise
          </span>

          <h2 className="mt-4 text-2xl  font-black text-white">
            Driven By Experience. Focused On Results.
          </h2>

          <p className="mt-5 text-slate-300 leading-8">
            Our leadership teams combine operational expertise,
            workforce management experience and compliance knowledge
            to deliver dependable solutions that help businesses grow
            with confidence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {leaders.map((leader) => {
            const Icon = leader.icon;

            return (
              <div
                key={leader.title}
                className="
                  group
                  rounded
                  bg-white/5
                  backdrop-blur-sm
                  border
                  border-white/10
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/10
                  hover:border-blue-400/30
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded
                    bg-blue-600/20
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {leader.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7 text-sm">
                  {leader.description}
                </p>

                <div className="mt-6 h-[2px] w-12 bg-blue-400 rounded" />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}