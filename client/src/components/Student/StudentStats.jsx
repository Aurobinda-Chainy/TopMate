import { FaBook, FaCheckCircle, FaCalendarAlt, FaBolt } from "react-icons/fa";
import studentData from "../../data/studentDashDb";

const StudentStats = () => {
  const stats = [
    {
      title: "Enrolled Courses",
      value: studentData.stats.courses,
      icon: <FaBook />,
      bg: "bg-blue-100",
      text: "text-blue-600",
      action: "View Programs →"
    },
    {
      title: "Sessions Completed",
      value: studentData.stats.completedSessions,
      icon: <FaCheckCircle />,
      bg: "bg-green-100",
      text: "text-green-600",
      action: "View Sessions →"
    },
    {
      title: "Upcoming Sessions",
      value: studentData.stats.upcomingSessions,
      icon: <FaCalendarAlt />,
      bg: "bg-orange-100",
      text: "text-orange-600",
      action: "View Schedule →"
    },
    {
      title: "Credits Left",
      value: studentData.credits,
      icon: <FaBolt />,
      bg: "bg-purple-100",
      text: "text-purple-600",
      action: "Buy Credits →"
    },
  ];

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex justify-between items-center"
        >
          {/* Left */}
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
            <p className="text-xs text-blue-600 mt-1 cursor-pointer">
              {item.action}
            </p>
          </div>

          {/* Icon */}
          <div className={`p-3 rounded-full text-xl ${item.bg} ${item.text}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentStats;