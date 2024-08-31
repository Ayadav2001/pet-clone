import React, { useState } from 'react';
import { Search, User, Calendar, ChevronRight } from 'lucide-react';
import photo1 from "../assets/PetImages/pet1.jpg";
import photo2 from "../assets/PetImages/pet2.jpg";
import photo3 from "../assets/PetImages/pet3.jpg";
import photo4 from "../assets/PetImages/pet4.jpg";
import photo5 from "../assets/PetImages/pet5.jpg";
import photo6 from "../assets/PetImages/pet6.jpg";
import photo7 from "../assets/PetImages/pet7.jpg";

const BlogDetailPage = () => {
    const [commentForm, setCommentForm] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment submitted:', commentForm);
        // Here you would typically send the comment data to your backend
    };

    const categories = ['Web Design', 'Web Development', 'Online Marketing', 'Keyword Research', 'Email Marketing'];
    const recentPosts = [
        { id: 1, title: 'Lorem ipsum dolor sit amet ipsum', image: `${photo1}` },
        { id: 2, title: 'Consectetur adipiscing elit sed do', image: `${photo2}` },
        { id: 3, title: 'Eiusmod tempor incididunt ut labore', image: `${photo3}` },
        { id: 4, title: 'Ut enim ad minim veniam quis', image: `${photo4}` },
    ];
    const tagCloud = ['Design', 'Development', 'Marketing', 'SEO', 'Technology', 'Business'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h1 className="text-5xl font-bold mb-6 text-blue-500">Exploring the Art of Web Design</h1>
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                        <User size={20} className="mr-3 text-red-500" />
                        <span className="mr-6">Written by Admin</span>
                        <Calendar size={20} className="mr-3 text-red-500" />
                        <span>Published on June 15, 2023</span>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img src={photo5} alt="Blog post main image" className="w-full transform hover:scale-110 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="prose max-w-none mb-12 mt-8 text-lg leading-relaxed">
                        <p>
                            Web design is not just about creating visually appealing layouts; it’s an art that combines aesthetics, functionality, and user experience. Understanding the core principles of design can greatly impact the way users interact with your website.
                        </p>
                        <h2 className="text-3xl font-bold mt-8 mb-6 text-purple-600">Bridging the Gap Between Design and Development</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
                                <img src={photo6} alt="Man with dog" className="w-full" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
                                <img src={photo7} alt="Woman with dogs" className="w-full" />
                            </div>
                        </div>
                        <p>
                            Integrating design and development seamlessly ensures that a website not only looks good but also functions effectively. By focusing on usability and accessibility, we create websites that are intuitive and easy to navigate.
                        </p>
                    </div>

                    {/* Comment Form */}
                    <div className="bg-gradient-to-r from-blue-100 to-purple-200 p-8 rounded-xl shadow-2xl">
                        <h3 className="text-3xl font-bold mb-6 text-gray-800">Join the Conversation</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <label htmlFor="name" className="absolute top-0 left-0 pl-3 pt-2 text-sm text-gray-700 group-focus-within:text-purple-500 transition-all duration-300">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={commentForm.name}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-3 border-b-2 border-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                />
                            </div>
                            <div className="relative group">
                                <label htmlFor="email" className="absolute top-0 left-0 pl-3 pt-2 text-sm text-gray-700 group-focus-within:text-purple-500 transition-all duration-300">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={commentForm.email}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-3 border-b-2 border-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                />
                            </div>
                            <div className="relative group">
                                <label htmlFor="website" className="absolute top-0 left-0 pl-3 pt-2 text-sm text-gray-700 group-focus-within:text-purple-500 transition-all duration-300">Website</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={commentForm.website}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-3 border-b-2 border-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                />
                            </div>
                            <div className="relative group">
                                <label htmlFor="message" className="absolute top-0 left-0 pl-3 pt-2 text-sm text-gray-700 group-focus-within:text-purple-500 transition-all duration-300">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={commentForm.message}
                                    onChange={handleInputChange}
                                    className="w-full py-4 px-3 border-b-2 border-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:-translate-y-1 hover:shadow-2xl duration-300"
                            >
                                Submit Comment
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-10">
                    {/* Search */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg relative">
                        <div className="absolute inset-0 opacity-20 bg-pattern" />
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search blog..."
                                className="w-full pl-4 pr-12 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 p-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-300">
                                <Search className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-xl shadow-lg relative">
                        <div className="absolute inset-0 opacity-20 bg-pattern" />
                        <h3 className="text-2xl font-semibold mb-4 text-white">Explore Categories</h3>
                        <ul className="space-y-3">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="text-lg font-medium text-white hover:text-yellow-200 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                                >
                                    <span>{category}</span>
                                    <ChevronRight size={20} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6 rounded-xl shadow-lg relative">
                        <div className="absolute inset-0 opacity-20 bg-pattern" />
                        <h3 className="text-2xl font-semibold mb-4 text-white">Recent Posts</h3>
                        <ul className="space-y-4">
                            {recentPosts.map((post) => (
                                <li key={post.id} className="flex items-center space-x-4 group">
                                    <div className="w-16 h-16 overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out">
                                        <img src={post.image} alt={`Recent post ${post.id}`} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-lg font-medium text-white group-hover:text-yellow-200 transition-colors duration-300">{post.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tag Cloud */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl shadow-lg relative">
                        <div className="absolute inset-0 opacity-20 bg-pattern" />
                        <h3 className="text-2xl font-semibold mb-4 text-white">Tag Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            {tagCloud.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-purple-700 text-white text-sm px-3 py-1 rounded-lg shadow-lg hover:bg-purple-800 transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
