import React from "react";

const InstantMentorship = () => {
  const packages = [
    {
      title: "1 Session Pack",
      price: "₹499",
      sessions: "1 Live Session",
      features: [
        "1:1 Live Session (60 mins)",
        "Instant Doubt Solving",
        "Flexible Timing",
        "Expert Mentor Support",
      ],
    },
    {
      title: "3 Session Pack",
      price: "₹1,299",
      sessions: "3 Live Sessions",
      popular: true,
      features: [
        "1:1 Live Sessions (60 mins each)",
        "Priority Doubt Solving",
        "Flexible Timing",
        "Session Recording Access",
      ],
    },
    {
      title: "5 Session Pack",
      price: "₹1,999",
      sessions: "5 Live Sessions",
      features: [
        "1:1 Live Sessions (60 mins each)",
        "Priority Doubt Solving",
        "Flexible Timing",
        "Dedicated Mentor Support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            ⚡ Instant Mentorship
          </h2>
          <p className="text-gray-500 mt-2">
            Get quick help from expert mentors
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-xl shadow transition hover:shadow-lg relative ${
                item.popular ? "border-2 border-blue-600" : ""
              }`}
            >

              {/* Popular Badge */}
              {item.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Price */}
              <h2 className="text-3xl font-bold mb-2">
                {item.price}
              </h2>

              {/* Sessions */}
              <p className="text-gray-500 mb-4">
                {item.sessions}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 text-gray-600 text-sm">
                {item.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InstantMentorship;