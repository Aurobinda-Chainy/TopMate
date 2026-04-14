import { FaBook, FaUsers, FaCalendarAlt, FaClock } from "react-icons/fa";

const stats = [
  {
    title: "Assigned Programs",
    value: 3,
    icon: <FaBook />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Total Assigned Students",
    value: 48,
    icon: <FaUsers />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Upcoming Sessions",
    value: 5,
    icon: <FaCalendarAlt />,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Available Hours",
    value: "12 hrs",
    icon: <FaClock />,
    color: "bg-purple-100 text-purple-600"
  }
];

const MentorStats = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-6">
      {stats.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow flex justify-between">
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>

          <div className={`p-3 rounded-full ${item.color}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorStats;