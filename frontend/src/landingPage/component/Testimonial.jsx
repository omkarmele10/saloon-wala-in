import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Anjali Mehta",
      role: "Salon Customer",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Booking my haircut and spa session was super easy. I loved comparing salons and choosing the best one near me.",
    },
    {
      name: "Rohit Malhotra",
      role: "Spa Client",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The platform helped me find a premium spa with great reviews. The experience was smooth from booking to service.",
    },
    {
      name: "Sneha Patil",
      role: "Beauty Enthusiast",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      text: "From makeup to skincare, everything is available in one place. I don’t need to call salons anymore.",
    },
    {
      name: "Amit Joshi",
      role: "Salon Owner",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "As a vendor, this platform helped my salon reach more customers and manage bookings effortlessly.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-bgColor"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        What Our Users Say
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Honest feedback from customers and salon partners using our all-in-one
        spa & salon platform
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
            <div className="bg-white rounded-3xl p-8 my-4 shadow-lg h-full hover:-translate-y-2 transition duration-300">
              {/* Quote */}
              <span className="text-primary text-6xl font-serif leading-none">
                “
              </span>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 text-yellow-400">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
