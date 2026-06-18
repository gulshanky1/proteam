"use client";
import Image from "next/image";

export default function AboutHero() {
    const stats = [
        { value: "1000+", label: "Workforce Deployed" },
        { value: "100+", label: "Clients Served" },
        { value: "PAN", label: "INDIA Presence" },

    ];

    return (
        <section className="bg-[#f8fafc] pb-16 ">
            <div className="max-w-7xl">

                {/* Banner Image */}
                <div className="relative h-[500px] hidden sm:block rounded overflow-hidden mb-12 md:mb-16 ">

                    <Image
                        src="/aboutt1.jpeg"   // ← Save the image here
                        alt="Proteam - Delivering Workforce Excellence"
                        fill
                        className="object-fit"
                        priority
                        quality={75}
                    />

                    {/* Dark Overlay for better text readability */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" /> */}


                </div>
                <div className="relative h-[500px] block sm:hidden rounded overflow-hidden mb-12 md:mb-16 shadow-2xl">

                    <Image
                        src="/about-mob.png"   // ← Save the image here
                        alt="Proteam - Delivering Workforce Excellence"
                        fill
                        className="object-fit"
                        priority
                        quality={75}
                    />

                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />


                </div>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
                        Our Company
                    </span>
                    <h2 className="mt-4 text-md sm:text-2xl font-black text-black leading-tight px-4">
                        Building Reliable Workforce Solutions For Modern Enterprises
                    </h2>
                    <p className="mt-6 text-black text-sm sm:text-base leading-6 px-4">
                        PROTEAM Management Services Pvt. Ltd. has been supporting
                        organizations with workforce deployment, facility management, compliance-driven
                        payroll services and operational support solutions tailored to evolving business requirements.
                    </p>
                </div>

                {/* Stats Section */}
                {/* Stats Section */}
                <div className="mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 lg:px-8">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="group bg-white/70 backdrop-blur-2xl border border-white/50 rounded p-3 text-center 
                 shadow-xl shadow-slate-300/30 hover:shadow-2xl hover:shadow-blue-200/50 
                 hover:-translate-y-2 transition-all duration-500"
                        >
                            <h3 className="  text-lg sm:text-2xl font-black text-slate-500">
                                {item.value}
                            </h3>
                            <p className="mt-2 text-slate-600 text-sm md:text-base font-medium">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}