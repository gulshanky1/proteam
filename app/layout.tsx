import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PROTEAM Management Services | Workforce Solutions in India",
    template: "%s | PROTEAM",
  },
  description:
    "Leading manpower outsourcing, payroll management, security services, housekeeping & facility management company in India. Trusted since 2017 for reliable workforce solutions.",
  keywords: [
    "manpower outsourcing",
    "workforce solutions",
    "payroll management",
    "security services",
    "housekeeping services",
    "facility management",
    "staffing solutions",
    "contract labour",
    "industrial workforce",
    "PROTEAM",
    "Delhi NCR",
    "India",
  ],
  authors: [{ name: "PROTEAM Management Services Pvt. Ltd." }],
  creator: "PROTEAM Management Services",
  publisher: "PROTEAM Management Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://proteamorg.com",
    siteName: "PROTEAM Management Services",
    title: "PROTEAM | Workforce Excellence Since 2017",
    description:
      "Expert manpower outsourcing, payroll, security & facility management services across India.",
    images: [
      {
        url: "/images/about-hero-banner.jpg", // Use your banner
        width: 1200,
        height: 630,
        alt: "PROTEAM Workforce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTEAM | Workforce Solutions India",
    description:
      "Trusted manpower outsourcing and facility management services since 2017.",
    images: ["/images/about-hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://proteamorg.com/"), // ← Change to your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://proteamorg.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}