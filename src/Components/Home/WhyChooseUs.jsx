import React from 'react';
import { Cat, UserCog, Heart, Headphones } from 'lucide-react';
import photo1 from "../../assets/photo-3.jpg";

const FeatureItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 mb-6">
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <span className="text-xl text-gray-800 font-medium">{text}</span>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl">
            <img 
              src={photo1} 
              alt="Woman with a small dog" 
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-teal-500 text-lg font-bold tracking-widest uppercase">Why Choose Us?</h2>
            <h1 className="text-5xl font-extrabold text-gray-900 animate-bounce">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Exceptional Care
              </span> For Your Pets
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience unparalleled care for your pets with our expert services. Our team ensures that your pet receives special attention and care tailored to their needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureItem icon={Cat} text="Top Industry Standards" />
              <FeatureItem icon={UserCog} text="24/7 Emergency Care" />
              <FeatureItem icon={Heart} text="Personalized Attention" />
              <FeatureItem icon={Headphones} text="Round-the-Clock Support" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
