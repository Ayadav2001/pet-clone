import React from "react";
import A5 from "../assets/a5.jpeg"; // Replace with your actual image path

const SpecialCare = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative hover:scale-105 transition-transform duration-300">
          <img
            src={A5}
            alt="Caring for Pets"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Unparalleled <span className="text-green-600">Care</span> for Your Pets
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At our facility, we prioritize your pets’ well-being above all else. With state-of-the-art equipment and compassionate staff, your pets are in safe hands.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-green-500 text-white rounded-full flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Comprehensive Veterinary Services</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-green-500 text-white rounded-full flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">24/7 Emergency Care</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-green-500 text-white rounded-full flex justify-center items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Compassionate & Skilled Staff</span>
            </li>
          </ul>
          <button className="mt-8 bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCare;
