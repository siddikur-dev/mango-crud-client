import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import ThemeToggle from "../../Ui/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-base-300 shadow-md w-full ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          Mango Client
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <NavLink className="text-secondary transition duration-200 cursor-pointer">
            Home
          </NavLink>
          <NavLink className="text-secondary transition duration-200 cursor-pointer">
            About
          </NavLink>
          <NavLink className="text-secondary transition duration-200 cursor-pointer">
            Items
          </NavLink>
          <ThemeToggle></ThemeToggle>
          <Link to="/register" className="btn btn-primary ">
            Register
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200 cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200 cursor-pointer"
            >
              Items
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
