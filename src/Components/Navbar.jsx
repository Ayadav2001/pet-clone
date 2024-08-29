import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <a href="/" className="hover:text-gray-300">PawsomeCare</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Links and Dropdown */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <a href="/" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">Home</a>
            <a href="/about" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">About Us</a>
            <a href="/services" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">Services</a>
            <a href="/portfolio" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">Booking</a>
            <a href="/PriceCard" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">Prices</a>
            {/* Dropdown Menu */}
            <div className="relative mt-2 md:mt-0">
              <button
                onClick={toggleDropdown}
                className="hover:text-gray-400 transition duration-200"
              >
                Pages <span className="ml-1">▼</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-gray-700 rounded-lg shadow-md py-2 w-40">
                  <a href="/blog" className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Blog Grid</a>
                  <a href="/faq" className="block px-4 py-2 hover:bg-gray-600 transition duration-200">Blog Detail</a>
                 
                </div>
              )}
            </div>

            <a href="/ContactForm" className="mt-2 md:mt-0 hover:text-gray-400 transition duration-200">Contact Us</a>
          </div>

          {/* Call to Action Button */}
          <div className="mt-4 md:mt-0">
            <a href="/quote" className="bg-teal-500 text-white px-4 py-2 m-3 rounded-lg shadow hover:bg-teal-600 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
