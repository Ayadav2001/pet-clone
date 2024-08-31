import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">PawsomeCare</h2>
            <p className="text-gray-400 mb-6 text-center md:text-left">Premium care for your pets with love and expertise.</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center mb-4">
              <MapPin size={20} className="mr-3" />
              <p className="text-gray-300">789 Bark Avenue, Pawsville, PC 12345</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={20} className="mr-3" />
              <p className="text-gray-300">+1 (555) PAW-SOME</p>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="mr-3" />
              <p className="text-gray-300">woof@pawsomecare.com</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Join Our Pack</h3>
            <p className="text-gray-400 mb-4">Get exclusive updates and offers straight to your inbox!</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PawsomeCare. All rights reserved. | <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Privacy Policy</a> | <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
