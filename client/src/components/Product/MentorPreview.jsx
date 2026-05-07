import React from "react";

const MentorPreview = () => {
  const mentors = [
    {
      name: "Aman Sharma",
      subject: "UPSC | Polity",
      experience: "6+ Years Exp.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Neha Verma",
      subject: "UPSC | History",
      experience: "5+ Years Exp.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Rahul Mehta",
      subject: "UPSC | Geography",
      experience: "7+ Years Exp.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Pooja Singh",
      subject: "UPSC | Economy",
      experience: "5+ Years Exp.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Vikram Joshi",
      subject: "UPSC | CSAT",
      experience: "4+ Years Exp.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            Mentors You Can Connect With
          </h3>

          <button className="text-blue-600 text-sm hover:underline">
            View all mentors →
          </button>
        </div>

        {/* Mentor Cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">

          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition flex items-center gap-3"
            >

              {/* Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              {/* Info */}
              <div>
                <h4 className="font-semibold text-sm">
                  {mentor.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {mentor.subject}
                </p>
                <p className="text-xs text-gray-400">
                  {mentor.experience}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MentorPreview;