import React from 'react';
import { Home, Bone, Scissors } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
    <div className="flex items-center justify-center bg-white rounded-full p-4 mb-6 w-16 h-16 mx-auto shadow-md">
      <Icon className="w-10 h-10 text-teal-500" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 animate-slide-in-down">{title}</h3>
    <p className="text-gray-600 text-center mb-6 animate-fade-in">{description}</p>
    <div className="text-center">
      <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
        Discover More
      </button>
    </div>
  </div>
);

const PremiumPetServices = () => {
  const services = [
    {
      icon: Home,
      title: 'Pet Resort',
      description: 'Experience luxury pet boarding with a focus on comfort and care, ensuring your pet feels right at home.'
    },
    {
      icon: Bone,
      title: 'Gourmet Meals',
      description: 'Indulge your pet with customized gourmet meals that cater to their specific dietary needs and tastes.'
    },
    {
      icon: Scissors,
      title: 'Styling & Spa',
      description: 'Pamper your pet with professional grooming services that leave them looking and feeling their best.'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 text-lg font-bold mb-4 tracking-wider uppercase animate-bounce">
            Exceptional Care
          </h2>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8 animate-slide-in-left">
            <span className="text-teal-500">Luxury</span> Pet Services
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumPetServices;
