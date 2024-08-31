import React from 'react';
import { Check, X } from 'lucide-react';
import price1 from "../../assets/PetImages/pet1.jpg"
import price2 from "../../assets/PetImages/pet12.jpg"
import price3 from "../../assets/PetImages/pet3.jpg"

const PricingCard = ({ title, price, features, image, color }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-50`}></div>
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/Mo</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <Check className="text-green-500 mr-2" size={20} />
            ) : (
              <X className="text-red-500 mr-2" size={20} />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      {/* w-full mt-6 py-2 px-4 rounded-full text-white font-semibold transition-colors duration-300 */}
      <button className="w-full mt-6 py-2 px-4 rounded-full text-white font-semibold transition-colors duration-300 bg-teal-500  hover:bg-orange-600  transform ">
          Get Started
        </button>
    </div>
  </div>
);

const PricingPlan = () => {
  const plans = [
    {
      title: 'Basic',
      price: 49,
      image: `${price1}`,
      color: 'from-teal-500',
      features: [
        { name: 'Feeding', included: true },
        { name: 'Boarding', included: true },
        { name: 'Spa & Grooming', included: false },
        { name: 'Veterinary Medicine', included: false },
      ],
    },
    {
      title: 'Standard',
      price: 99,
      image: `${price2}`,
      color: 'from-orange-500',
      features: [
        { name: 'Feeding', included: true },
        { name: 'Boarding', included: true },
        { name: 'Spa & Grooming', included: true },
        { name: 'Veterinary Medicine', included: false },
      ],
    },
    {
      title: 'Premium',
      price: 149,
      image: `${price3}`,
      color: 'from-orange-500',
      features: [
        { name: 'Feeding', included: true },
        { name: 'Boarding', included: true },
        { name: 'Spa & Grooming', included: true },
        { name: 'Veterinary Medicine', included: true },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-green-500 text-2xl font-semibold mb-2 animate-bounce">Pricing Plan</h2>
          <h1 className="text-4xl font-bold mb-4">
            Choose the <span className="text-orange-500">Best Price</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
