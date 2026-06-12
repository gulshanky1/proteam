"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Top Info Bar */}
      <div className="hidden md:block bg-[#081b3a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-10 text-sm">

            <div className="flex items-center gap-6 lg:gap-8">

              <a
                href="mailto:business@proteamorg.com"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Mail size={15} />
                business@proteamorg.com
              </a>

              <a
                href="tel:+917011219291"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Phone size={15} />
                +91 701121 9291
              </a>

            </div>

            <div className="hidden lg:block text-blue-100 text-xs xl:text-sm">
              Workforce • Security • Payroll • Facility Management
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={130}
                height={50}
                className="object-contain h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-900"
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="
                  px-6
                  py-3
                  bg-[#081b3a]
                  hover:bg-blue-700
                  text-white
                  text-sm
                  font-semibold
                  rounded-full
                  transition-all
                "
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4">

            <div className="space-y-3 pb-4 border-b border-gray-100">

              <a
                href="mailto:business@proteamorg.com"
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Mail size={16} />
                business@proteamorg.com
              </a>

              <a
                href="tel:+917011219291"
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Phone size={16} />
                +91 701121 9291
              </a>

            </div>

            <div className="pt-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-sm font-medium border-b border-gray-50 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-4
                  block
                  w-full
                  text-center
                  px-5
                  py-3
                  bg-[#081b3a]
                  hover:bg-blue-700
                  text-white
                  text-sm
                  font-semibold
                  rounded-full
                  transition-all
                "
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}