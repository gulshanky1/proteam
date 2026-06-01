export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-[32px] bg-gradient-to-r from-[#081b3a] to-[#0f2f66] p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-4xl font-black text-white">
            Ready To Build A Stronger Workforce?
          </h2>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
            Partner with PROTEAM for reliable staffing,
            compliance-driven payroll management and integrated
            facility management solutions.
          </p>

          <a
            href="/contact"
            className="
              inline-flex
              mt-8
              px-8
              py-4
              rounded-full
              bg-white
              text-[#081b3a]
              font-semibold
              hover:scale-105
              transition
            "
          >
            Contact Us
          </a>

        </div>
      </div>
    </section>
  );
}