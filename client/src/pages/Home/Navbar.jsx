import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">TopMates</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm"
            />
            <BiSearchAlt2 className="text-gray-500" />
          </div>
          <Link to="/login">
            <button className="text-blue-600 hover:underline">Login</button>
          </Link>

          <Link to="/register">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-50 p-4 rounded-lg">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/features"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </ul>

          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
            <BiSearchAlt2 />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full text-blue-600 border border-blue-600 py-2 rounded-full hover:bg-blue-50 transition">
                Login
              </button>
            </Link>

            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
