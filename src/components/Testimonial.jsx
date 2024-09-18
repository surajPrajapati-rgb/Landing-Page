import React, { useState } from 'react';
import './Testimonial.css';


const testimonials = [
  {
    text: "I had a wonderful time working with [Name]. His flexibility, knowledge of human behavior, and UX design are remarkable and an asset for any client."
  },
  {
    text: "The project went smoothly and [Name] was a key factor in its success. Highly recommend!"
  },
  {
    text: "Amazing experience! Very professional and dedicated. [Name] brought creativity and intelligence to the project."
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-container">
      <hr className="line" />
      <div className="testimonial-text">
        {testimonials[currentIndex].text}
      </div>
      <hr className="line" />
      <div className="testimonial-arrows">
        <span className="arrow left-arrow" onClick={handlePrev}>‹</span>
        <span className="arrow right-arrow" onClick={handleNext}>›</span>
      </div>
    </div>
  );
};

export default Testimonial;
