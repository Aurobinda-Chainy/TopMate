import React from "react";
import { FaClipboardList, FaUserCheck, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-purple-600 text-3xl" />,
      title: "Choose Program",
      desc: "Select the program that matches your goals and learning needs.",
    },
    {
      icon: <FaUserCheck className="text-pink-500 text-3xl" />,
      title: "Get Mentor Assigned",
      desc: "We assign you the best mentor based on your course and goals.",
    },
    {
      icon: <FaCalendarAlt className="text-green-500 text-3xl" />,
      title: "Attend Sessions",
      desc: "Join live sessions, ask doubts, and learn through interactive mentorship.",
    },
    {
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      title: "Achieve Goals",
      desc: "Stay consistent and achieve your academic goals with confidence.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-sm text-blue-600 font-semibold mb-2">
          HOW IT WORKS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your Journey, Simplified
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">

              {/* Circle Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4 shadow">
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="text-sm font-semibold text-blue-600 mb-1">
                {index + 1}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm max-w-xs">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;