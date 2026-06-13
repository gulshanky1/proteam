import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Contractual Manpower",
    image: "/manpower.png",
    slug: "contractual-manpower",
    description:
      "Flexible manpower outsourcing solutions tailored to project and operational requirements.",
  },
   {
    title: "Security Services",
    image: "/security.png",
    slug: "security-services",
    description:
      "In today’s digitized and connected world, fraud, identity theft and cheating both in the professional and personal sphere present the single largest risk. These are more pronounced in India where cyber security is an area of weakness in Government and Corporate sectors.....",
  },
  {
    title: "Skill development & Training",
    image: "/training.png",
    slug: "training-development",
    description:
      "Empowering individuals through industry-oriented B.Voc and D.Voc programs that combine academic learning with practical workplace training. Our Learn & Earn model helps candidates develop job-ready skills while gaining real-world experience and recognized vocational qualifications.",
  },
  {
    title: "Housekeeping Services",
    image: "/house.png",
    slug: "housekeeping-services",
    description:
      "We have 5 years of experience in providing all kind of manpower to various corporate sectors. Our people work 24*7 so that you can focus on core strengths of your business. We help in raising productivity and cut down employment related risk. ...",
  },
   
  
  {
    title: "Payroll Management",
    image: "/payroll.png",
    slug: "payroll-management",
    description:
      "Payroll isn’t just about paying your people. And let’s face it, you didn’t get into business to manage paperwork and keep track of payroll legislations...",
  },
  {
    title: "Staffing",
    image: "/staffing.png",
    slug: "staffing",
    description:
      "At PROTEAM , we not only provide recruitment consultancy services to our clients but also give the applicants a perfect platform to get their dream jobs. We can help our clients to get the suitable candidates, cultivate them and retain them...",
  },
 
  
 
];

export default function ServicesShowcase() {
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