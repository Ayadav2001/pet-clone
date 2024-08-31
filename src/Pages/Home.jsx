import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import banner1 from "../assets/animal.jpg";
import banner2 from "../assets/animal1.jpg";
import banner3 from "../assets/animal2.jpg";
import banner4 from "../assets/animal3.jpg";
import PetBoardingComponent from '../Components/Home/PetBoardingComponent';
import PremiumPetServices from '../Components/Home/PremiumPetServices';
import TestimonialComponent from '../Components/Home/TestimonialComponent';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import PricingPlan from '../Components/Home/PricingPlan';
import TeamMember from '../Components/Home/TeamMember';
import ScrollToTopButton from '../Components/Home/ScrollToTopButton';
import PetBlogUpdates from '../Components/Home/PetBlogUpdates';

const heroData = [
  {
    id: 1,
    title: "Pet Spa & Grooming",
    subtitle: "Best Pet Services",
    description: "Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat",
    imageUrl: `${banner1}`
  },
  {
    id: 2,
    title: "Luxury Pet Hotel",
    subtitle: "Comfort for Your Companions",
    description: "Pamper your pets with our 5-star accommodation and care",
    imageUrl: `${banner2}`
  },
  {
    id: 3,
    title: "Veterinary Services",
    subtitle: "Expert Pet Healthcare",
    description: "Top-notch medical care for your furry family members",
    imageUrl: `${banner3}`
  },
  {
    id: 4,
    title: "Pet Daycare",
    subtitle: "Safe & Fun Environment",
    description: "Your pets will enjoy their time with us, playing and learning",
    imageUrl: `${banner4}`
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroData.length) % heroData.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {heroData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 animate-fade-in-up">
                {slide.subtitle}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-150">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg max-w-2xl mb-8 animate-fade-in-up animation-delay-300">
                {slide.description}
              </p>
              <div className="flex space-x-4 animate-fade-in-up animation-delay-450">
                <button className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full transform transition duration-300 hover:scale-105">
                  Book Now
                </button>
                <button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full transform transition duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition duration-300"
        >
          <ChevronRight size={24} />
        </button>
        <ScrollToTopButton />
      </div>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Pamper Your Pet</h2>
                <p className="mb-6">
                  Give your pet the best care with our top-notch services. Book now and ensure their comfort and happiness.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <ChevronLeft className="w-8 h-8" />, title: 'Cozy Boarding', description: 'Comfortable and secure lodging for your pet.' },
                    { icon: <ChevronRight className="w-8 h-8" />, title: 'Gourmet Meals', description: 'Delicious and nutritious meals tailored for your pet.' },
                    { icon: <ArrowUp className="w-8 h-8" />, title: 'Stylish Grooming', description: 'Professional grooming to keep your pet looking fabulous.' },
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-teal-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="grooming">Grooming</option>
                    <option value="boarding">Boarding</option>
                    <option value="daycare">Daycare</option>
                    <option value="veterinary">Veterinary Services</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <PetBoardingComponent />
      <PremiumPetServices />
      <WhyChooseUs />
      <PricingPlan />
      <TeamMember />
      <TestimonialComponent />
      <PetBlogUpdates/>
    </>
  );
};

export default Home;
