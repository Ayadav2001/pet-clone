import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    profession: "Software Engineer",
    comment: "Working with this team has been an absolute pleasure. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    profession: "Marketing Director",
    comment: "The results speak for themselves. Our campaign performance improved dramatically thanks to their innovative strategies.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Chen",
    profession: "Startup Founder",
    comment: "Their guidance was invaluable in helping us navigate the challenges of scaling our business.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
        {testimonial.name[0]}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{testimonial.profession}</p>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 text-center italic">&ldquo;{testimonial.comment}&rdquo;</p>
    </div>
  </div>
);

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate('prev')}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-teal-600" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-2 transition-all duration-300 ${
                index === currentIndex ? 'bg-teal-600 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;