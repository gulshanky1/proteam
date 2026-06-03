// components/services/contractual/Hero.tsx

import Image from "next/image";

export default function ContractualHero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Desktop */}
      <div className="hidden lg:block relative aspect-[1920/700]">
        <Image
          src="/9997services-banner.jpg"
          alt="Contractual Manpower"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden relative aspect-[1200/600]">
        <Image
          src="/services/contractual/hero-tablet.jpg"
          alt="Contractual Manpower"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden relative aspect-[4/5]">
        <Image
          src="/services/contractual/hero-mobile.jpg"
          alt="Contractual Manpower"
          fill
          priority
          className="object-cover"
        />
      </div>

    </section>
  );
}