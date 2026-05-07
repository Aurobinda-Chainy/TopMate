import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const WhyDifferent = () => {
  const ours = [
    "Expert Mentors with real experience",
    "Affordable pricing for every student",
    "Short-term + Long-term flexibility",
    "Personalized 1:1 guidance",
  ];

  const others = [
    "Limited or less experienced faculty",
    "High pricing and fixed plans",
    "No flexibility in learning",
    "No personalized mentorship",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-sm text-blue-600 font-semibold mb-2">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Makes Us Different?
        </h2>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* OUR PLATFORM */}
          <div className="bg-white p-8 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Our Platform
            </h3>

            <ul className="space-y-4">
              {ours.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OTHERS */}
          <div className="bg-white p-8 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-6 text-gray-600">
              Others
            </h3>

            <ul className="space-y-4">
              {others.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-500 mt-1" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyDifferent;