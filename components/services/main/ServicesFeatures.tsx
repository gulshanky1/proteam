import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Settings,
} from "lucide-react";

export default function ServicesFeatures() {
  return (
    <section className="bg-gradient-to-r from-[#081b3a] to-[#0f2f66] py-13">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12  items-center">

          {/* Content */}
          <div>

            <span className="text-blue-300 uppercase tracking-[0.2em] text-xs font-semibold">
              Why Choose PROTEAM
            </span>

            <h2 className="mt-4 text-2xl  font-bold text-white leading-tight">
              Delivering Operational Excellence Through Proven Processes and Workforce Expertise
            </h2>

            <p className="mt-5 text-slate-300 leading-7 max-w-xl">
              We combine skilled manpower, operational efficiency, regulatory
              compliance, and industry best practices to help organizations
              achieve sustainable growth and uninterrupted operations.
            </p>

            <div className="mt-10 space-y-8">

              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0">
                  <Settings
                    size={22}
                    className="text-blue-300"
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Preventive Maintenance Management
                  </h4>

                  <p className="text-slate-300 text-sm leading-6 mt-1">
                    Structured maintenance programs designed to minimize
                    downtime and improve operational efficiency across
                    facilities and assets.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0">
                  <ShieldCheck
                    size={22}
                    className="text-blue-300"
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Regulatory Compliance Assurance
                  </h4>

                  <p className="text-slate-300 text-sm leading-6 mt-1">
                    Complete adherence to statutory regulations, labor laws,
                    payroll requirements, and industry compliance standards.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0">
                  <Users
                    size={22}
                    className="text-blue-300"
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Strategic Workforce Deployment
                  </h4>

                  <p className="text-slate-300 text-sm leading-6 mt-1">
                    Skilled manpower solutions aligned with business goals,
                    ensuring productivity, flexibility, and operational
                    excellence.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service.png"
              alt="PROTEAM Operations"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}