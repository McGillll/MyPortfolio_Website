import React, { useState } from 'react';

export const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-full h-fit py-5 bg-gray-200 rounded-lg relative'>
      <div className='relative w-full h-full overflow-hidden'>
        <img
          className='w-full h-fit'
          src={images[currentIndex]}
          alt={altText}
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10'
        aria-label='Previous image'
      >
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10'
        aria-label='Next image'
      >
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className='flex justify-center gap-2 mt-3'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-amber-700 w-6' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
