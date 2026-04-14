import { FaHome, FaBook, FaUsers, FaCalendar } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const MentorLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col justify-between">

        <div>
          <h1 className="text-xl font-bold p-6">EdTech Mentor</h1>

          <ul className="space-y-2 px-4">
            <li className="flex items-center gap-3 p-3 bg-blue-700 rounded-lg">
              <FaHome /> Dashboard
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-lg cursor-pointer">
              <FaBook /> My Programs
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-lg cursor-pointer">
              <FaUsers /> My Students
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-lg cursor-pointer">
              <FaCalendar /> Schedule
            </li>
          </ul>
        </div>

        <div className="p-4 border-t border-blue-700">
          <button className="flex items-center gap-2">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Welcome back</h2>

          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MentorLayout;