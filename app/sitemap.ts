import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.proteamorg.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/how-we-work",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/contractual-manpower",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/housekeeping-services",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/payroll-management",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/security-services",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/staffing",
      lastModified: new Date(),
    },
    {
      url: "https://www.proteamorg.com/services/training-development",
      lastModified: new Date(),
    },
  ];
}