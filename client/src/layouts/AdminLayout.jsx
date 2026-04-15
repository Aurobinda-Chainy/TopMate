import {
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { FiLogOut, FiSearch, FiSettings } from "react-icons/fi";

import {NavLink} from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-linear-to-b from-blue-900 to-blue-700 text-white flex flex-col justify-between">
        {/* Top */}
        <div>
          <h1 className="text-xl font-bold p-6">TopMate Admin</h1>

          <ul className="space-y-2 px-4">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-800"
                }`
              }
            >
              <FaUserGraduate /> Dashboard
            </NavLink>

            <NavLink
              to="/admin/mentors"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-800"
                }`
              }
            >
              <FaChalkboardTeacher /> Mentors
            </NavLink>

            <NavLink
              to="/admin/students"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-800"
                }`
              }
            >
              <FaUsers /> Students
            </NavLink>

            <NavLink
              to="/admin/programs"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-800"
                }`
              }
            >
              <FaBook /> Programs
            </NavLink>

            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-800"
                }`
              }
            >
              <FiSettings /> Settings
            </NavLink>
          </ul>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-blue-600">
          <p className="text-sm">Admin User</p>
          <button className="flex items-center gap-2 mt-2 text-sm hover:text-gray-300">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm"
              />
              <FiSearch className="ml-2 text-gray-500" />
            </div>

            {/* Profile */}
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
