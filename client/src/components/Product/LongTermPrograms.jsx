import React from "react";


const LongTermPrograms = () => {
  const programs = [
    {
      title: "UPSC Foundation Batch 2025",
      mentor: "Ankit Raj Sir",
      duration: "12 Months",
      startDate: "15 June 2025",
      students: "1,250+",
      mode: "Live + Recorded",
      syllabus:
        "Polity, History, Geography, Economy, CSAT, Environment, Current Affairs",
    },
    {
      title: "UPSC Prelims Crash Course",
      mentor: "Shreya Ma'am",
      duration: "4 Months",
      startDate: "01 July 2025",
      students: "980+",
      mode: "Live + Recorded",
      syllabus:
        "Complete Prelims Syllabus, Mock Tests, PYQ Discussion, Current Affairs",
    },
    {
      title: "UPSC Mains Advance Batch",
      mentor: "Vivek Sir",
      duration: "6 Months",
      startDate: "10 June 2025",
      students: "760+",
      mode: "Live + Recorded",
      syllabus:
        "GS 1-4, Essay, Ethics, Optional Guidance, Answer Writing Practice",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            📚 Long-Term Mentorship Programs
          </h2>
          <p className="text-gray-500 mt-2">
            Structured learning with expert guidance
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Mentor */}
              <p className="text-sm text-gray-500 mb-4">
                By {item.mentor}
              </p>

              {/* Info */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>📅 Duration: {item.duration}</p>
                <p>🗓 Start Date: {item.startDate}</p>
                <p>👥 Students: {item.students}</p>
                <p>🎥 Mode: {item.mode}</p>
              </div>

              {/* Syllabus */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-1">
                  Syllabus Preview
                </h4>
                <p className="text-xs text-gray-500">
                  {item.syllabus}
                </p>
              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>

            </div>
          ))}

        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:underline">
            View all batches →
          </button>
        </div>

      </div>
    </section>
  );
};

export default LongTermPrograms;