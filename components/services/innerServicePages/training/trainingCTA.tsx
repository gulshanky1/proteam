
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-15 px-6 bg-[#f4f7fb]">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded
            border
            border-white/20
            bg-gradient-to-br
            from-[#071c3b]
            via-[#0b2a56]
            to-[#0d3b78]
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(7,28,59,0.35)]
            px-8
            md:px-16
            py-20
            text-center
          "
        >

          {/* Animated Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded"></div>

          {/* Shine Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Small Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/10 backdrop-blur-xl text-sm text-blue-100 mb-8">
            <span className="w-2 h-2 rounded bg-cyan-400 animate-pulse"></span>
            Workforce Solutions 
          </div>

          {/* Heading */}
          <h2
            className="
              relative
              z-10
                text-2xl
              font-black
              leading-tight
              text-white
              max-w-4xl
              mx-auto
            "
          >
            Build Your Workforce
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              with PROTEAM
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              relative
              z-10
              text-blue-100/80
              text-lg
              leading-8
              max-w-2xl
              mx-auto
              mt-8
            "
          >
           Learn, Earn, and Grow through UGC-approved industry-integrated vocational programs.
          </p>

          {/* Buttons */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-5 mt-12">



            {/* Secondary Button */}
            <Link href="/contact">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  px-8
                  py-4
                  text-white
                  font-semibold
                  transition-all
                  duration-500
                  hover:bg-white/20
                  hover:scale-105
                  cursor-pointer
                "
              >
                <PhoneCall size={18} />
                Contact Us
              </button>
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "4000+ Workforce",
              "100+ Clients",
              "PAN INDIA",
              "24*7 Support",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  py-5
                  px-4
                  text-sm
                  text-blue-100
                  font-medium
                "
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
