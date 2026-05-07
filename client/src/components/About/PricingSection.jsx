import React from "react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-sm text-blue-600 font-semibold mb-2">
          PRICING PLANS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Choose Your Mentorship Plan
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* SHORT TERM */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Short-Term Mentorship
            </h3>

            <p className="text-gray-600 mb-6">
              Perfect for quick doubt solving and instant guidance.
            </p>

            <h2 className="text-3xl font-bold mb-6">
              ₹999
              <span className="text-sm text-gray-500"> / package</span>
            </h2>

            <ul className="space-y-3 mb-6 text-gray-600">
              <li>✔ 3 One-on-One Sessions</li>
              <li>✔ Instant Doubt Solving</li>
              <li>✔ Flexible Scheduling</li>
              <li>✔ Expert Mentors</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* LONG TERM */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 text-left relative">

            {/* Highlight Badge */}
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Long-Term Mentorship
            </h3>

            <p className="text-gray-600 mb-6">
              Complete structured learning with continuous mentorship.
            </p>

            <h2 className="text-3xl font-bold mb-6">
              ₹4999
              <span className="text-sm text-gray-500"> / 3 Months</span>
            </h2>

            <ul className="space-y-3 mb-6 text-gray-600">
              <li>✔ Live Batch Classes</li>
              <li>✔ Structured Syllabus</li>
              <li>✔ Dedicated Mentor</li>
              <li>✔ Regular Assessments</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;