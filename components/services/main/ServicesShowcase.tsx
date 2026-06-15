import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Manpower Outsourcing",
    image: "/manpower.png",
    slug: "manpower-outsourcing",
    description:
      "Reliable deployment of skilled, semi-skilled, and unskilled workforce across operational, technical, and support roles. We manage sourcing, onboarding, attendance, payroll coordination, and compliance, allowing businesses to focus on core operations.",
  },

  {
    title: "Security Services",
    image: "/security2.png",
    slug: "security-services",
    description:
      "Professional security solutions designed to safeguard people, assets, and facilities. Our trained and verified security personnel ensure round-the-clock protection, disciplined operations, and compliance-driven security management.",
  },

  {
    title: "Staffing Solutions",
    image: "/staffing.png",
    slug: "staffing-solutions",
    description:
      "Flexible and scalable staffing support for temporary, contractual, and project-based requirements. We provide qualified, background-verified, and job-ready talent with rapid deployment and transparent workforce management.",
  },


  {
    title: "Housekeeping Services",
    image: "/house2.png",
    slug: "housekeeping-services",
    description:
      "Comprehensive housekeeping services delivered by trained professionals to maintain clean, hygienic, and well-managed facilities. We ensure high service standards for corporate offices, industries, institutions, and commercial establishments.",
  },

  {
    title: "Payroll Management",
    image: "/payroll.png",
    slug: "payroll-management",
    description:
      "End-to-end payroll lifecycle management covering salary processing, reimbursements, settlements, PF, ESI, TDS, statutory compliance, reporting, and employee query resolution while reducing administrative overheads.",
  },

  {
    title: "Skill Development & Training",
    image: "/training.png",
    slug: "skill-development-training",
    description:
      "Industry-oriented vocational training programs designed to develop job-ready talent. Our Learn & Earn model combines practical workplace exposure with professional training, helping individuals build successful careers.",
  },
];

export default function   ServicesShowcase() {
  return (
    <section className="py-5 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase text-xs tracking-[0.25em] font-bold">
            Services
          </span>

          <h2 className="mt-3 text-2xl font-black text-slate-900">
            What We Deliver
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            End-to-end workforce, compliance, facility and security
            management solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              image={service.image}
              slug={service.slug}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}