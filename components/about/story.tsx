import {
  Users,
  ShieldCheck,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Qualified Workforce",
    description:
      "Deployment of skilled, semi-skilled and unskilled manpower tailored to operational requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Focused",
    description:
      "Strong adherence to statutory regulations, labor laws, PF, ESIC and payroll compliance.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Expertise",
    description:
      "Serving manufacturing, logistics, healthcare, retail, corporate and industrial sectors.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Flexible workforce and facility management solutions designed for business growth.",
  },
];

export default function AboutStory() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Side */}
          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
              Our Story
            </span>

            <h2 className="mt-4 text-md sm:text-2xl  font-black text-slate-900 leading-tight">
              Building Reliable Workforce &
              Facility Management Solutions
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-6">
              PROTEAM Management Services Pvt. Ltd. was established
              with a vision to simplify workforce management through
              dependable staffing, operational excellence and
              compliance-driven service delivery.
            </p>

            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-6">
              Over the years, we have partnered with organizations
              across multiple industries to provide manpower
              outsourcing, payroll management, security services,
              housekeeping solutions and facility management support.
            </p>

            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-6">
              Our focus remains on delivering qualified manpower,
              maintaining statutory compliance and helping businesses
              achieve greater operational efficiency.
            </p>

          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-5">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    p-6
                    rounded
                    border
                    border-slate-200
                    bg-white
                    hover:border-blue-200
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                      mb-5
                      group-hover:bg-blue-600
                      transition-colors
                    "
                  >
                    <Icon
                      size={26}
                      className="text-blue-600 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}