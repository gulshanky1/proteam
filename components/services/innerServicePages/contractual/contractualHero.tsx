export default function ManpowerHero() {
  const stats = [
    {
      value: "80%",
      label: "Companies Use HR Outsourcing",
    },
    {
      value: "PAN India",
      label: "Operational Presence",
    },
    {
      value: "End-to-End",
      label: "Workforce & Payroll Solutions",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] pt-2 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            PROTEAM Management Services Pvt. Ltd.
          </span>

          <h1 className="mt-4 text-xl sm:text-3xl font-black text-slate-900 leading-tight">
            Manpower outsourcing solutions built for
            compliant, efficient, and scalable operations.
          </h1>

          <p className="mt-6 text-slate-500 text-lg">
            Elevating business with manpower excellence through dependable
            workforce deployment, payroll management, and full compliance
            with new labour laws and practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded p-8 text-center border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-black text-blue-600">
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