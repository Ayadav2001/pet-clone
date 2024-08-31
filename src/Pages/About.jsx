import React from "react";
import A1 from "../assets/a1.jpeg";
import A2 from "../assets/a2.jpeg";
import A3 from "../assets/a3.jpeg";
import A4 from "../assets/a4.jpeg";
import SpecialCare from "./SpecialCare";
import Team from "./Team";


const About = () => {
  return (
    <>
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-blue-600 text-3xl font-bold">Who We Are</h2>
        <p className="text-gray-500 mt-4">
          Dedicated to providing the best care for your beloved pets.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 px-16 md:grid-cols-2 gap-8">
        {/* Left Section - Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={A1}
            alt="Dog & Cat"
            className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src={A2}
            alt="Dogs"
            className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src={A3}
            alt="Cats"
            className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src={A4}
            alt="Cats"
            className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 mb-6">
            We are committed to offering exceptional boarding and daycare services, ensuring that your pets receive the best care in a safe and loving environment.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="inline-block bg-blue-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-500"
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
                  ></path>
                </svg>
              </span>
              <p className="ml-3 text-gray-700">Expert Veterinary Care</p>
            </div>
            <div className="flex items-center">
              <span className="inline-block bg-green-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-green-500"
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
                  ></path>
                </svg>
              </span>
              <p className="ml-3 text-gray-700">24/7 Monitoring</p>
            </div>
            <div className="flex items-center">
              <span className="inline-block bg-red-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-red-500"
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
                  ></path>
                </svg>
              </span>
              <p className="ml-3 text-gray-700">Comfortable Facilities</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
    <SpecialCare/>
    <Team/>
</>
  );
};

export default About;
