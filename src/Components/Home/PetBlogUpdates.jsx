import React from 'react';
import { User, Folder, MessageSquare } from 'lucide-react';
import photo1 from "../../assets/PetImages/pet11.jpg";
import photo2 from "../../assets/PetImages/pet15.jpg";
import photo3 from "../../assets/PetImages/pet14.jpg";

const blogPosts = [
  {
    id: 1,
    title: 'Diam amet eos at no eos',
    image: `${photo1}`,
    author: 'Admin',
    category: 'Web Design',
    comments: 15,
    excerpt: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo',
  },
  {
    "id": 1,
    "title": "Exploring the Depths of Oceanic Life",
    "image": `${photo2}`,
    "author": "Dr. Marine",
    "category": "Marine Biology",
    "comments": 25,
    "excerpt": "Dive into the fascinating world of oceanic life, exploring the mysteries of the deep sea and the creatures that inhabit it."
  },
  {
    "id": 3,
    "title": "A Journey Through Space and Time",
    "image": `${photo3}`,
    "author": "AstroGuru",
    "category": "Astronomy",
    "comments": 42,
    "excerpt": "Explore the wonders of the cosmos, from the birth of stars to the mysteries of black holes, and what they reveal about our universe."
  }
];

const BlogCard = ({ post }) => (
  <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-xl shadow-lg transform transition duration-500 hover:rotate-6 hover:scale-110">
    <div className="w-full h-48 overflow-hidden rounded-full mx-auto">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition duration-500 hover:scale-125" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
      <div className="flex items-center justify-center text-sm text-white space-x-3 mb-4">
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Folder size={16} className="mr-1" />
          <span>{post.category}</span>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="mr-1" />
          <span>{post.comments}</span>
        </div>
      </div>
      <p className="text-white mb-4">{post.excerpt}</p>
      <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-full transition transform hover:scale-105 hover:shadow-lg focus:outline-none animate-pulse">
        Read More
      </button>
    </div>
  </div>
);

const PetBlogUpdates = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-white mb-4">
          <span className="text-purple-500">Latest</span> Blog Updates
        </h2>
        <p className="text-center text-2xl text-gray-400 mb-12">Stay Informed with Our Pet Blog</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetBlogUpdates;
