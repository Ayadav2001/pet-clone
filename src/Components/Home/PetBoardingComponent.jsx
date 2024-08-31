import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import photo1 from "../../assets/animal.jpg";
import photo2 from "../../assets/animal1.jpg";

const PetBoardingComponent = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      {/* Left side content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:pr-10">
        <h2 className="text-xl font-bold mb-4 animate-pulse text-indigo-600">
          Discover the <span className="text-pink-500">Magic</span> of Pet Care
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Transform your pet's life with our extraordinary services, designed to bring joy and comfort.
        </p>
        <div className="flex flex-col space-y-4 mb-6">
          {[
            { text: 'Award-Winning Care', icon: <Sparkles className="text-indigo-500" size={24} /> },
            { text: 'Loving Environment', icon: <Heart className="text-pink-500" size={24} /> },
            { text: 'Round-the-Clock Attention', icon: <Sparkles className="text-indigo-500" size={24} /> },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start space-x-4 animate-fade-in-up">
              <div>{item.icon}</div>
              <span className="text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>
        <button className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Right side images */}
      <div className="md:w-1/2 flex flex-col space-y-6">
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <img
            src={photo1}
            alt="Pet care magic"
            className="w-full h-full object-cover opacity-75 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-25 flex items-center justify-center text-2xl font-bold text-white">
            Pure Happiness
          </div>
        </div>
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <img
            src={photo2}
            alt="Pet care fun"
            className="w-full h-full object-cover opacity-75 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-25 flex items-center justify-center text-2xl font-bold text-white">
            Endless Fun
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetBoardingComponent;
