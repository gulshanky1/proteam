"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-semibold text-sm md:text-base mb-3">
            PROTEAM MANAGEMENT SERVICES PVT. LTD
          </p>

          <Link
            href="/"
            className="inline-flex bg-white p-2 rounded-md shadow-sm"
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
            Excellence in workforce and facility management
            services. Delivering reliable manpower,
            security, housekeeping, payroll and outsourcing
            solutions across industries.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link
                href="/services/contractual-manpower"
                className="hover:text-white transition-colors"
              >
                Contractual Manpower
              </Link>
            </li>

            <li>
              <Link
                href="/services/security-services"
                className="hover:text-white transition-colors"
              >
                Security Services
              </Link>
            </li>

            <li>
              <Link
                href="/services/sanitation-works"
                className="hover:text-white transition-colors"
              >
                Skill Development & Training
              </Link>
            </li>

            <li>
              <Link
                href="/services/housekeeping-services"
                className="hover:text-white transition-colors"
              >
                Housekeeping Services
              </Link>
            </li>


            <li>
              <Link
                href="/services/payroll-management"
                className="hover:text-white transition-colors"
              >
                Payroll Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/staffing"
                className="hover:text-white transition-colors"
              >
                Staffing Solutions
              </Link>
            </li>



          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <span>
                Add Your Office Address Here
                <br />
                New Delhi, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-blue-400"
              />
              <a
                href="tel:+919876543210"
                className="hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-blue-400"
              />
              <a
                href="mailto:info@proteamservices.in"
                className="hover:text-white transition-colors break-all"
              >
                info@proteamservices.in
              </a>
            </li>

          </ul>
        </div>

        {/* Company Links & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/how-we-work"
                className="hover:text-white transition-colors"
              >
                How We Work
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>

          </ul>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-white font-medium mb-3">
              Follow Us
            </h4>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            Designed & Developed by PROTEAM
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} PROTEAM Management
            Services Pvt. Ltd. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}