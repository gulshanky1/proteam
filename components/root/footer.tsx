import Link from "next/dist/client/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <Link
  href="/"
  className="inline-flex bg-white p-1 rounded-3xl"
>
  <Image
    src="/logo.png"
    alt="Logo"
    width={120}
    height={40}
    className="object-contain"
  />
</Link>

          <p className="text-sm text-gray-400 leading-7">
            Excellence in workforce and facility
            management services.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Staffing Solutions</li>
            <li>Payroll Management</li>
            <li>Security Services</li>
            <li>Facility Care</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Industries</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Legal
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Compliance Docs</li>
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
