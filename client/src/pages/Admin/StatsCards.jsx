import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaVideo } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Students",
    value: "1,250",
    icon: <FaUserGraduate />,
    bg: "bg-green-100",
    text: "text-green-600"
  },
  {
    id: 2,
    title: "Total Mentors",
    value: "42",
    icon: <FaChalkboardTeacher />,
    bg: "bg-blue-100",
    text: "text-blue-600"
  },
  {
    id: 3,
    title: "Active Programs",
    value: "15",
    icon: <FaBook />,
    bg: "bg-orange-100",
    text: "text-orange-600"
  },
  {
    id: 4,
    title: "Ongoing Sessions",
    value: "23",
    icon: <FaVideo />,
    bg: "bg-purple-100",
    text: "text-purple-600"
  },
];

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-6">

      {stats.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-5 rounded-xl bg-white shadow hover:shadow-md transition"
        >
          {/* Left */}
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>

          {/* Icon */}
          <div className={`text-2xl p-3 rounded-full ${item.bg} ${item.text}`}>
            {item.icon}
          </div>
        </div>
      ))}

    </div>
  );
};

export default StatsCards;