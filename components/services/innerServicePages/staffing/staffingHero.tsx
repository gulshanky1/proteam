export default function StaffingHero() {
  const stats = [
    {
      value: "1000+",
      label: "jobs enabled",
    },
    {
      value: "50+",
      label: "Industry Partners",
    },
    {
      value: "48 Hrs",
      label: "CV Turn around",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            PROTEAM Staffing Services
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl  font-black text-slate-900 leading-tight">
            Professional Staffing
            <span className="block text-blue-600">
              Solutions For Growing Businesses
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-base md:text-lg leading-8">
            PROTEAM connects organizations with qualified,
            skilled, and reliable professionals through
            strategic recruitment, workforce planning,
            talent acquisition, and staffing expertise
            across diverse industries.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                bg-[#081b3a]
                hover:bg-blue-700
                text-white
                rounded
                font-semibold
                transition-all
              "
            >
              Contact Us
            </a>
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                rounded
                p-8
                text-center
                border
                border-slate-100
                shadow-sm
              "
            >
              <h3 className="text-4xl font-black text-blue-600">
                {item.value}
              </h3>

              <p className="text-slate-500 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}