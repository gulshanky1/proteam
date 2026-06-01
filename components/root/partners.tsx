// components/TrustedBySection.tsx

export default function TrustedBySection() {
 const companies = [
  "Tata Motors",
  "Denso",
  "Krishna Maruti",
  "Shivam Autotech",
  "Technico Industries",
  "Multitex",
  "Satyam Auto Components",
  "Ramco Steels",
  "Andritz Hydro",
  "MASU",
  "Munjal Showa",
  "Relaxo",
  "AISIN",
  "EMIZA",
  "Shadowfax",
  "FM Logistic",
  "Ethics Express",
  "CGL Logistics",
  "QXpress",
  "Apex Logistics",
  "Trackon Logistics",
  "Noise",
  "Edgistify",
  "Nandini Hospital",
  "Vipul"
];

  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Trusted by over 30+ Blue-Chip Companies
        </p>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Moving Line */}
          <div className="flex animate-marquee whitespace-nowrap w-max">

            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center shrink-0 mx-8 sm:mx-12"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gray-400">
                  {company}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}