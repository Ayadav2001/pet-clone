import React from 'react';
import A6 from "../assets/a6.jpeg"
import A7 from "../assets/a7.jpeg"
import A8 from "../assets/a8.jpeg"
import A9 from "../assets/a9.jpeg"

const TeamMember = ({ name, role, image, petType }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-200 opacity-75"></div>
      <div className="absolute bottom-0 p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="text-xs text-gray-500 mt-1">Favorite Pet: {petType}</div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: 'Mollie Ross', role: 'Founder & CEO', image: `${A6}`, petType: 'Cat' },
    { name: 'Jennifer Page', role: 'Chef Executive', image: `${A7}`, petType: 'Dog' },
    { name: 'Kate Glover', role: 'Doctor', image: `${A8}`, petType: 'Dog' },
    { name: 'Lilly Fry', role: 'Trainer', image: `${A9}`, petType: 'Cat' },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Wonderful Team</h1>
        <p className="text-lg text-gray-600">Meet the dedicated team behind our success</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index} 
            name={member.name} 
            role={member.role} 
            image={member.image} 
            petType={member.petType} 
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
