"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Props {
    title: string;
    image: string;
    slug: string;
    description?: string;
    large?: boolean;
}

export default function ServiceCard({
    title,
    image,
    slug,
    description,
    large,
}: Props) {
    return (
        <div
            className={`group perspective ${large ? "h-[320px] md:h-[420px]" : "h-[220px] md:h-[280px]"
                }`}
        >
            <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden overflow-hidden rounded-[28px]">

                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Glass Panel */}
                    <div
                        className="
              absolute
              bottom-4
              left-4
              right-4
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              p-4
              transition-all
              duration-500
              group-hover:bg-white/15
            "
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-bold text-lg md:text-xl">
                                {title}
                            </h3>

                            <ArrowUpRight
                                className="
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                                size={20}
                            />
                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-[28px] bg-[#0f172a] border border-slate-700 p-6 flex flex-col justify-between">

                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-semibold mb-4">
                            SERVICE
                        </span>

                        <h3 className="text-white text-xl font-bold mb-4">
                            {title}
                        </h3>

                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                            {description ||
                                "Professional workforce and facility management solutions designed to improve operational efficiency and business performance."}
                        </p>
                    </div>

                    <Link
                        href={`/services/${slug}`}
                        className="
              flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition-colors
            "
                    >
                        Know More
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

            </div>
        </div>
    );
}