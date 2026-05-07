import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "This platform helped me clear my doubts instantly. The mentors are very supportive and knowledgeable.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Singh",
      text: "The structured courses and 1:1 mentorship made my preparation smooth and effective.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Kumar",
      text: "Affordable pricing and quality mentorship — best combination for any student.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Amit Kumar",
      text: "Affordable pricing and quality mentorship — best combination for any student.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Amit Kumar",
      text: "Affordable pricing and quality mentorship — best combination for any student.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-sm text-blue-600 font-semibold mb-2">
          SUCCESS STORIES
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Students Say
        </h2>

        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left h-full">

        {/* Stars */}
        <div className="flex text-yellow-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-600 mb-6">
          "{item.text}"
        </p>

        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h4 className="font-semibold text-gray-800">
              {item.name}
            </h4>
            <p className="text-sm text-gray-500">
              Student
            </p>
          </div>
        </div>

         </div>
        </SwiperSlide>
        ))}
    </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;