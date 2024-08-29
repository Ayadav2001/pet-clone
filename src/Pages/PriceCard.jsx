import React, { useState } from 'react';
// import { Calendar, Clock, Scissors, Bone, Home, Dog } from 'lucide-react';
import { Home, Bone, Scissors, Dog, Calendar, Clock } from 'lucide-react';
import Cat1 from '../assets/Cat1.jpg'
import Dog1 from '../assets/dog1.jpg'
import Cat2 from '../assets/Cat3.jpg'

const PricingCards = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form Data:', formData);
      };
    
  return (
  <div>
    <div className="bg-gray-100 py-12 px-4">
        <div className='text-black font-bold mt-20 text-center'>
        <h1 className='text-red-500 font-bold text-center text-3xl'>Price Plan</h1>
        <span className='text-black font-bold text-center text-6xl'>Choose the <span className='text-red-500'>best Price</span></span>
        </div>
         <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-cover bg-center h-60" style={{ backgroundImage: `url(${Cat1})` }}>
      {/* Additional content goes here */}
    
            <div className=" bg-opacity-15 h-full flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold">Basic</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-center text-4xl font-bold text-gray-800">$49 <span className="text-lg font-medium text-gray-600">/mo</span></h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Feeding</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Boarding</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500">❌</span>
                <span className="ml-2 text-gray-700">Spa & Grooming</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500">❌</span>
                <span className="ml-2 text-gray-700">Veterinary Medicine</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Sign Up Now</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-cover bg-center h-60" style={{ backgroundImage: `url(${Dog1})` }}>
            <div className="h-full flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Standard</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-center text-4xl font-bold text-gray-800">$99 <span className="text-lg font-medium text-gray-600">/mo</span></h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Feeding</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Boarding</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Spa & Grooming</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500">❌</span>
                <span className="ml-2 text-gray-700">Veterinary Medicine</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">Sign Up Now</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-cover bg-center h-60" style={{ backgroundImage: `url(${Cat2})` }}>
            <div className=" h-full flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Premium</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-center text-4xl font-bold text-gray-800">$149 <span className="text-lg font-medium text-gray-600">/mo</span></h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Feeding</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Boarding</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Spa & Grooming</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✔️</span>
                <span className="ml-2 text-gray-700">Veterinary Medicine</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>





<section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Pamper Your Pet</h2>
              <p className="mb-6">Give your pet the best care with our top-notch services. Book now and ensure their comfort and happiness.</p>
              <div className="space-y-6">
                {[
                  { icon: <Home className="w-8 h-8" />, title: 'Cozy Boarding', description: 'Comfortable and secure lodging for your pet.' },
                  { icon: <Bone className="w-8 h-8" />, title: 'Gourmet Meals', description: 'Delicious and nutritious meals tailored for your pet.' },
                  { icon: <Scissors className="w-8 h-8" />, title: 'Stylish Grooming', description: 'Professional grooming to keep your pet looking fabulous.' },
                  { icon: <Dog className="w-8 h-8" />, title: 'Fun Training', description: 'Engaging training sessions for your pet\'s development.' },
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white text-teal-600 p-3 rounded-full shadow-md">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                      <p className="text-teal-200">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-lg mt-6 transition duration-300">Learn More</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <h2 className="text-3xl font-bold mb-6">Book Your Pet's Stay</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select a Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="boarding">Pet Boarding</option>
                  <option value="feeding">Pet Feeding</option>
                  <option value="grooming">Pet Grooming</option>
                  <option value="training">Pet Training</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default PricingCards;
