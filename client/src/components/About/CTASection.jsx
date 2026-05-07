import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>

        {/* Subtext */}
        <p className="text-white/80 mb-8">
          Join thousands of students who are already improving their skills with expert mentorship.
        </p>

        {/* Button */}
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Now →
        </button>

      </div>
    </section>
  );
};

export default CTASection;