import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Anjali Mehta",
      role: "Daily Commuter",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "RideHub makes my daily office commute super easy. Bike rides are quick, affordable, and always available nearby.",
    },
    {
      name: "Rohit Malhotra",
      role: "Cab User",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I booked a cab late at night and the driver arrived within minutes. Smooth experience and transparent pricing.",
    },
    {
      name: "Sneha Patil",
      role: "College Student",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      text: "As a student, RideHub bike rides save me both time and money. The app is simple and very reliable.",
    },
    {
      name: "Amit Joshi",
      role: "RideHub Driver Partner",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "RideHub helped me earn consistently with flexible working hours. The driver app is easy to use and transparent.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-28 px-6 bg-gradient-to-b from-blue-400 to-blue-200"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#0F172A]">
        What Our Users Say
      </h2>

      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Real experiences from riders and driver partners using RideHub every day
      </p>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full hover:-translate-y-2 transition duration-300 flex flex-col">
              {/* Quote */}
              <span className="text-[#1F5EFF] text-6xl font-serif leading-none">
                “
              </span>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                {t.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    {t.name}
                  </h4>
                  <p className="text-sm text-[#22C55E]">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 text-[#22C55E]">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

