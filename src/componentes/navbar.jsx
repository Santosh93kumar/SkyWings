
import React, { useState } from 'react';
import logo from '../assets/products/image 1.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden">
          <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="text-gray-700 hover:text-black focus:outline-none"
  >
    {isMobileMenuOpen ? (
      // Cross (X) Icon when menu is open
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      // Hamburger Icon when menu is closed
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden sm:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-400 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : 'px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : ' px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Service
            </NavLink>

            <NavLink
              to="/job"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : ' px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Job
            </NavLink>

            {/* <NavLink
              to="/employes"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-medium'
                  : ' px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Employes
            </NavLink> */}
{/* 
            <NavLink
              to="/fresher"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-medium'
                  : ' px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Fresher
            </NavLink> */}

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : '  px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              About
            </NavLink>

            {/* <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-medium'
                  : 'px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Blog
            </NavLink> */}

            <NavLink
              to="/carrers"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : 'px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm  font-bold underline'
                  : ' px-3 py-2 rounded-md text-sm font-medium'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline block'
                  : ' hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Service
            </NavLink>

            <NavLink
              to="/job"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Job
            </NavLink>

            {/* <NavLink
              to="/employes"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-black px-3 py-2 rounded-md text-sm font-medium  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Employes
            </NavLink> */}

            {/* <NavLink
              to="/fresher"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-black px-3 py-2 rounded-md text-sm font-medium  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Fresher
            </NavLink> */}

            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              About
            </NavLink>

            {/* <NavLink
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-black px-3 py-2 rounded-md text-sm font-medium  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Blog
            </NavLink> */}

            <NavLink
              to="/carrers"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-600 px-3 py-2 rounded-md text-sm font-bold underline  block'
                  : 'hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium block '
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
