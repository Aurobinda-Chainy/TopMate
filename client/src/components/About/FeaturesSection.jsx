import React from "react";
import { FaUserGraduate, FaComments, FaBookOpen, FaClock } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      title: "Live Mentorship",
      desc: "Learn directly from experts through interactive live sessions and real-time guidance.",
    },
    {
      icon: <FaComments className="text-pink-500 text-3xl" />,
      title: "1:1 Doubt Solving",
      desc: "Get instant answers to your doubts with personalized one-on-one help from mentors.",
    },
    {
      icon: <FaBookOpen className="text-green-500 text-3xl" />,
      title: "Structured Courses",
      desc: "Well-designed courses with step-by-step learning paths to build strong concepts.",
    },
    {
      icon: <FaClock className="text-yellow-500 text-3xl" />,
      title: "Flexible Learning",
      desc: "Learn at your own pace with flexible schedules and choose what suits you best.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-sm text-blue-600 font-semibold mb-2">
          WHAT WE PROVIDE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Everything You Need to Succeed
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;