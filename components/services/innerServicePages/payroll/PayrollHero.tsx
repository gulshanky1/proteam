export default function PayrollHero() {


  return (
    <section className="bg-[#f7f9fc] pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            PROTEAM Payroll Management
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Streamlined Payroll
            <span className="block text-blue-600">
              Management Solutions
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-base md:text-lg leading-8">
            PROTEAM delivers secure, accurate, and compliant payroll
            management services that simplify salary processing,
            statutory compliance, employee benefits administration,
            and workforce record management for businesses of all sizes.
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


      </div>
    </section>
  );
}