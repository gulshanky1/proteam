// components/contact/LocationSection.tsx

import {
  MapPin,
  Phone,
  Globe,
  Building2,
} from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20  bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 uppercase tracking-[0.25em] text-xs font-bold">
            OUR LOCATION
          </span>

          <h2 className="mt-4 text-2xl  font-black text-slate-900">
            Visit Our Corporate Office
          </h2>

          <p className="mt-5 text-slate-600 text-base  leading-relaxed">
            Connect with our team for manpower outsourcing,
            staffing solutions, payroll management, security,
            housekeeping and facility management services.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">

              <div className="space-y-8">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Office Address
                    </h4>

                    <p className="mt-2 text-slate-600 leading-7">
                      119, Tower B4,
                      <br />
                      Spaze iTech Park,
                      <br />
                      Sector 49,
                      <br />
                      Gurugram, Haryana
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Contact Numbers
                    </h4>

                    <p className="mt-2 text-slate-600">
                      +91 7011219291
                    </p>

                    <p className="text-slate-600">
                      +91 7011431414
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Globe className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Website
                    </h4>

                    <p className="mt-2 text-slate-600">
                      www.proteamorg.com
                    </p>
                  </div>
                </div>

                {/* Business */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Building2 className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Business Operations
                    </h4>

                    <p className="mt-2 text-slate-600 leading-7">
                      PAN India Workforce Management,
                      Staffing Solutions,
                      Payroll Management,
                      Security & Facility Services.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side Google Map */}
          <div className="lg:col-span-3">

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl h-[450px] md:h-[550px]">

              <iframe
                src="https://maps.google.com/maps?q=Spaze%20iTech%20Park%20Sector%2049%20Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}