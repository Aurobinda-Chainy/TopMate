import { FaHome, FaBook, FaCalendarAlt, FaWallet, FaCog } from "react-icons/fa";
import { FiLogOut, FiSearch, FiBell } from "react-icons/fi";
import studentData from ".././data/studentDashDb";

const StudentLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col justify-between">

        {/* Top */}
        <div>
          <h1 className="text-xl font-bold p-6">TopMate</h1>

          <ul className="space-y-2 px-4">
            <li className="flex items-center gap-3 p-3 bg-blue-600 rounded-lg">
              <FaHome /> Dashboard
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-600 rounded-lg cursor-pointer">
              <FaBook /> My Courses
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-600 rounded-lg cursor-pointer">
              <FaCalendarAlt /> Sessions
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-600 rounded-lg cursor-pointer">
              <FaWallet /> Wallet
            </li>

            <li className="flex items-center gap-3 p-3 hover:bg-blue-600 rounded-lg cursor-pointer">
              <FaCog /> Settings
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{studentData.name}</p>
              <p className="text-xs text-gray-300">{studentData.role}</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm hover:text-gray-300">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow">

          <h2 className="text-xl font-semibold">Student</h2>

          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent outline-none text-sm ml-2"
              />
            </div>

            {/* Notification */}
            <div className="relative">
              <FiBell className="text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                2
              </span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{studentData.name}</p>
                <p className="text-xs text-gray-500">{studentData.role}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

export default StudentLayout;