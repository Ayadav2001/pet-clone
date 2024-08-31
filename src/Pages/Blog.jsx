import React from 'react';
import A10 from "../assets/a10.webp";
import A11 from "../assets/a11.jpeg";
import A12 from "../assets/a12.webp";
import A13 from "../assets/a13.webp";
import A14 from "../assets/a14.jpeg";
import A15 from "../assets/a15.webp";

const BlogCard = ({ image, title, author, category, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
          <span className="text-sm font-bold text-yellow-500">{category}</span>
          <h3 className="text-2xl font-bold mt-2">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm mb-4">{description}</p>
        <div className="text-sm">
          <p className="font-medium">Written by {author}</p>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      image: A10,
      title: 'Exploring New Web Design Trends',
      author: 'John Doe',
      category: 'Web Design',
      description: 'Stay ahead of the curve by exploring the latest trends in web design and how they can enhance user experience.',
    },
    {
      image: A11,
      title: 'The Art of Minimalism in Design',
      author: 'Jane Smith',
      category: 'Design Philosophy',
      description: 'Minimalism is more than just a design style; it’s a way of thinking that emphasizes simplicity and clarity.',
    },
    {
      image: A12,
      title: 'Understanding User-Centered Design',
      author: 'Sam Wilson',
      category: 'UX Design',
      description: 'User-centered design puts the user at the heart of the design process, ensuring a better product experience.',
    },
    {
      image: A13,
      title: 'Creative Typography in Web Design',
      author: 'Emily Johnson',
      category: 'Typography',
      description: 'Typography can make or break a design. Learn how to use typography creatively to enhance your web projects.',
    },
    {
      image: A14,
      title: 'Responsive Design Best Practices',
      author: 'Michael Brown',
      category: 'Responsive Design',
      description: 'With the growing diversity of devices, responsive design is more important than ever. Here are the best practices.',
    },
    {
      image: A15,
      title: 'Color Theory for Web Designers',
      author: 'Chris Evans',
      category: 'Color Theory',
      description: 'Color theory is a fundamental aspect of design. Learn how to apply it effectively in your web designs.',
    }
  ];

  return (
    <section className="py-16 px-8 bg-black text-gray-200">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-yellow-400">Insights & Trends</h2>
        <h1 className="text-4xl font-extrabold text-white mt-4">Our Latest Blog Posts</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            category={blog.category}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
