import React, { useState } from "react";
import "./index.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      sri: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      sri: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      sri: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].sri}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;