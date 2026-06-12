// components/contact/ContactHero.tsx

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-[1920px] mx-auto">

        {/* Desktop Banner */}
        <div className="hidden lg:block">
          <Image
            src="/contact-desktopp.jpg"
            alt="Contact Banner"
            width={1920}
            height={650}
            priority
            sizes="100vw"
            className="w-full h-auto block"
          />
        </div>

        {/* Tablet Banner */}
        <div className="hidden md:block lg:hidden">
          <Image
            src="/contact-tablet.jpg"
            alt="Contact Banner"
            width={1280}
            height={800}
            priority
            sizes="100vw"
            className="w-full h-auto block"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden">
          <Image
            src="/contact-mobile.jpg"
            alt="Contact Banner"
            width={1080}
            height={1350}
            priority
            sizes="100vw"
            className="w-full h-auto block"
          />
        </div>

      </div>
    </section>
  );
}