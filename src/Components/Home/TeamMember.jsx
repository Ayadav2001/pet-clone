import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import photo1 from "../../assets/animal.jpg"
import photo2 from "../../assets/animal1.jpg"
import photo3 from "../../assets/photo-4.jpg"

const TeamMemberCard = ({ name, role, image }) => (
  <div className="relative bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
    <div className="relative overflow-hidden rounded-xl">
      <img src={image} alt={name} className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-lg italic">{role}</p>
          <div className="mt-4 flex space-x-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
            <a href="#" className="text-white hover:text-blue-500">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamMember = () => {
  const teamMembers = [
    {
      name: 'Mollie Ross',
      role: 'Founder & CEO',
      image: `${photo1}`
    },
    {
      name: 'Jennifer Page',
      role: 'Chef Executive',
      image: `${photo2}`
    },
    {
      name: 'Kate Glover',
      role: 'Doctor',
      image: `${photo3}`
    },
    {
      name: 'Lilly Fry',
      role: 'Trainer',
      image: `${photo1}`
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-700 text-2xl font-semibold mb-4">Our Creative Team</h2>
          <h1 className="text-5xl font-extrabold text-white">
            Meet the <span className="text-blue-500">Team</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
