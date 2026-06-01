"use client";

export default function AboutHero() {
  const stats = [
    {
      value: "1000+",
      label: "Workforce Deployed",
    },
    {
      value: "30+",
      label: "Clients Served",
    },
    {
      value: "6+",
      label: "States Presence",
    },
    {
      value: "2017",
      label: "Established",
    },
  ];

  return (
    <section className="bg-[#f8fafc] pt-24 pb-16 md:pb-20 lg:pb-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner Placeholder */}
        <div
          className="
            h-[220px]
            sm:h-[280px]
            md:h-[380px]
            lg:h-[500px]
            rounded-3xl
            bg-gradient-to-r
            from-[#081b3a]
            via-[#0f2f66]
            to-[#164a9c]
            overflow-hidden
            relative
            mb-10
            md:mb-14
          "
        >

          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="absolute inset-0 flex items-center justify-center px-6">

            <div className="text-center max-w-4xl">

              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  text-xs
                  md:text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                "
              >
                About PROTEAM
              </span>

              <h1
                className="
                  mt-6
                  text-white
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-black
                  leading-tight
                "
              >
                Delivering Workforce Excellence
              </h1>

              <p
                className="
                  mt-5
                  text-blue-100
                  text-sm
                  sm:text-base
                  md:text-lg
                  max-w-3xl
                  mx-auto
                  leading-7
                "
              >
                Trusted manpower outsourcing, payroll management,
                security services, housekeeping, sanitation and
                workforce solutions helping businesses operate with
                confidence, compliance and efficiency.
              </p>

            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-xs">
            Our Company
          </span>

          <h2
            className="
              mt-4
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-black
              text-slate-900
            "
          >
            Building Reliable Workforce Solutions
            For Modern Enterprises
          </h2>

          <p
            className="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-8
            "
          >
            Since 2017, PROTEAM Management Services Pvt. Ltd.
            has been supporting organizations with workforce
            deployment, facility management, compliance-driven
            payroll services and operational support solutions
            tailored to evolving business requirements.
          </p>

        </div>

        {/* Stats */}
        <div
          className="
            mt-12
            md:mt-16
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            md:gap-6
          "
        >

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-6
                md:p-8
                text-center
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  text-slate-900
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  md:text-base
                  text-slate-500
                "
              >
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}