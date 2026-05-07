import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from white to gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Tag */}
          <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
            Flexible. Personalized. Effective
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Choose Your <br />
            <span className="text-blue-600">
              Mentorship Program
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 mb-6 max-w-lg">
            Get instant help for quick doubts or join structured batches for
            complete preparation. Learn from expert mentors and achieve your academic goals.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Programs
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              How It Works
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/product-hero.png" // 👉 put your image in public/assets
            alt="Mentorship Illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;