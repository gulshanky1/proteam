import Link from "next/dist/client/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
       <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <p className="text-white font-semibold text-sm md:text-base mb-3">
    PROTEAM MANAGEMENT SERVICES PVT. LTD
  </p>

  <Link
    href="/"
    className="inline-flex bg-white p-2 rounded-2xl shadow-sm"
  >
    <Image
      src="/logo.png"
      alt="Logo"
      width={120}
      height={40}
      className="object-contain w-auto h-auto"
    />
  </Link>

  <p className="mt-4 text-sm text-gray-400 leading-7 max-w-xs">
    Excellence in workforce and facility management services.
    Delivering reliable manpower, security, housekeeping,
    payroll and outsourcing solutions across industries.
  </p>
</div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services/contractual-manpower" className="hover:text-white transition-colors">
                Contractual Services
              </Link>
            </li>
            <li>
              <Link href="/services/security-services" className="hover:text-white transition-colors">
                Security Services
              </Link>
            </li>
            <li>
              <Link href="/services/housekeeping-services" className="hover:text-white transition-colors">
                Housekeeping Services
              </Link>
            </li>
            <li>
              <Link href="/services/sanitation-works" className="hover:text-white transition-colors">
                Skill development & Training (B.Voc/D.Voc)
              </Link>
            </li>
            <li>
              <Link href="/services/staffing" className="hover:text-white transition-colors">
                Staffing Solutions
              </Link>
            </li>


            <li>
              <Link href="/services/payroll-management" className="hover:text-white transition-colors">
                Payroll Management
              </Link>
            </li>








          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/how-we-work" className="hover:text-white transition-colors">
                How We Work
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Legal
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>

            <li>
              <Link href="/compliance-docs" className="hover:text-white transition-colors">
                Compliance Docs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PROTEAM Management Services Pvt Ltd.
      </div>
      <div></div>
    </footer>
  );
}
