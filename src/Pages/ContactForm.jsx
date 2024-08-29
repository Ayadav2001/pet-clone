import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8">
      <div className='text-black font-bold mt-20 text-center'>
        <h1 className='text-green-500 font-bold text-center text-3xl'>Contact Us</h1>
        <span className='text-black font-bold text-center text-6xl'>Contact for <span className='text-red-500'>Any Query</span></span>
        </div>
      <div className="bg-white rounded-lg mt-4 shadow-lg max-w-5xl w-full md:flex md:justify-between p-8">
        {/* Contact Information */}
        <div className="md:w-1/3 p-6 flex flex-col items-start space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">Contact Information</h2>
          <p className="text-gray-700 mb-6">We would love to hear from you. Reach out to us through any of the following ways:</p>
          <div className="space-y-5">
            <div className="flex items-center text-gray-800">
              <Phone className="text-indigo-600 mr-4" size={28} />
              <span>+1 (555) PAW-CARE</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Mail className="text-indigo-600 mr-4" size={28} />
              <span>hello@pawsomecare.com</span>
            </div>
            <div className="flex items-center text-gray-800">
              <MapPin className="text-indigo-600 mr-4" size={28} />
              <span>123 Pet Street, Furry City, PC 12345</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="md:w-2/3 p-6 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-800">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            >
              <Send className="mr-2" size={22} />
              Send
            </button>
          </form>
        </div>
      </div>
      
    </div>
    
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-5xl">
    <div className="relative w-full pb-[56.25%]">
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.968923539965!2d-80.12267332488886!3d25.94047097821064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abdc491be8c3%3A0xb5d9e2d9d8e3cf6c!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1692866324449!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Sunny Isles Beach, FL"
      ></iframe>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Sunny Isles Beach, FL</h2>
      <p className="text-sm sm:text-base text-gray-600">Explore the beautiful Sunny Isles Beach area</p>
    </div>
  </div>
</div>
    </>
  );
};

export default ContactForm;
