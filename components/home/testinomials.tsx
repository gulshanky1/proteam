"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Proteam has revolutionized our logistics staffing. Their compliance standards are unparalleled in the industry.",
    role: "Operations Director",
    company: "Leading Logistics Enterprise",
    rating: 5,
  },
  {
    text: "Seamless payroll management. We haven't had a single compliance issue since we partnered with PROTEAM in 2019.",
    role: "HR Head",
    company: "Manufacturing Conglomerate",
    rating: 4,
  },
  {
    text: "Their facility management team is professional and highly responsive. Our office environment has never been better.",
    role: "Facility Manager",
    company: "Tech Park Pune",
    rating: 5,
  },
  {
    text: "Exceptional workforce quality and rapid deployment across multiple operational sites.",
    role: "Regional Manager",
    company: "Retail Chain India",
    rating: 3,
  },
  {
    text: "PROTEAM consistently delivers operational excellence and dependable staffing solutions.",
    role: "Admin Head",
    company: "Healthcare Group",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#f4f7fb]">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 blur-3xl rounded" />

      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-200/30 blur-3xl rounded" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 px-4">

          <h2 className="text-2xl font-black text-[#111827]">
            Client Success Stories
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-4">
            Trusted by enterprises across India.
          </p>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={1000}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.15,
            },
            640: {
              slidesPerView: 1.7,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
          className="px-4 md:px-8 pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-xl
                  p-5
                  md:p-6
                  min-h-[260px]
                  shadow-[0_8px_32px_rgba(31,38,135,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_16px_40px_rgba(31,38,135,0.14)]
                "
              >

                {/* Glass Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />

                {/* Dynamic Rating Stars */}
                <div className="relative z-10 flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className={
                        star <= item.rating
                          ? "text-blue-500 fill-blue-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="relative z-10 text-sm md:text-[15px] text-gray-700 leading-7 min-h-[120px]">
                  "{item.text}"
                </p>

                {/* User */}
                <div className="relative z-10 flex items-center gap-3 mt-6">

                  <div className="w-11 h-11 rounded bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                    {item.role.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-[#111827]">
                      {item.role}
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.company}
                    </p>
                  </div>

                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}