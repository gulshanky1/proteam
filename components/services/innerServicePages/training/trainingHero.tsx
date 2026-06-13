export default function SkillDevelopmentHero() {
  const stats = [
    {
      value: "3 Years",
      label: "B.VOC Degree Duration",
    },
    {
      value: "1–2 Years",
      label: "D.VOC Diploma Duration",
    },
    {
      value: "UGC",
      label: "Government Approved",
    },
    {
      value: "600%+",
      label: "Industry Growth Since 2016",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] pt-2 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            Skill Development Programs
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            B.VOC &amp; D.VOC — Industry-Integrated
            Vocational Programs for Modern Enterprises.
          </h1>

          <p className="mt-6 text-slate-500 text-lg">
            UGC-approved vocational degrees built on the "Learn &amp; Earn"
            model — fully compliant with new labour laws and designed
            to build industry-ready talent from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded p-8 text-center border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-black text-blue-600">
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