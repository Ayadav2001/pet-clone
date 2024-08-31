import { useState } from 'react';
import { ArrowUp } from 'react-feather'; // Ensure you have this icon or replace with your own

function ScrollToTopButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsClicked(false), 500); // Reset the flash effect after 500ms
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-4 z-50 rounded-full transition duration-300 
        ${isHovered ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'} 
        ${isClicked ? 'animate-flash' : 'animate-pulse'}`}
    >
      <ArrowUp 
        size={24} 
        className={`transform transition-transform duration-300 ${isHovered ? 'rotate-180' : 'rotate-0'}`} 
      />
    </button>
  );
}

export default ScrollToTopButton;
