"use client";

import { useState } from "react";
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
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`group perspective cursor-pointer ${
        large ? "h-[320px] md:h-[420px]" : "h-[220px] md:h-[280px]"
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`
          relative
          h-full
          w-full
          transition-transform
          duration-700
          transform-style-preserve-3d
          md:group-hover:rotate-y-180
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden overflow-hidden rounded-md">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-4
            "
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-sm sm:text:xl">
                {title}
              </h3>

              <ArrowUpRight
                size={20}
                className="text-white"
              />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="
            absolute
            inset-0
            rotate-y-180
            backface-hidden
            rounded-[28px]
            bg-[#0f172a]
            border border-slate-700
            p-6
            flex
            flex-col
            justify-between
          "
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-semibold mb-4">
              SERVICE
            </span>

            <h3 className="text-white text-sm font-bold mb-4">
              {title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 ">
              {description}
            </p>
          </div>

          {/* Prevent card flip when button clicked */}
          <Link
            href={`/services/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-2
              sm:py-3
              rounded-md
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