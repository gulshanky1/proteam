export default function ServicesHero() {
  const stats = [
    {
      value: "4000+",
      label: "Skilled Personnel Deployed",
    },
    {
      value: "93%",
      label: "Industry Compliance Rating",
    },
    {
      value: "85+",
      label: "Enterprise Facilities Managed",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] pt-2 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            Built For Enterprise
          </span>

          <h1 className="mt-4 text-3xl font-black text-slate-900 leading-tight">
            Comprehensive facility and workforce
            management for global leaders.
          </h1>

          <p className="mt-6 text-slate-500 text-lg">
            We engineer operational excellence through a
            unified ecosystem of staffing, compliance,
            security, and facility maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded p-8 text-center border border-slate-100 shadow-sm"
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