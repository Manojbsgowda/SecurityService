"use client";

import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaBuilding } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    name: "Manoj B S",
    role: "Prestige apartments",
    feedback:
      "I have used this company's services for years and have nothing but good things to say about it. I like the flexibility and professionalism.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
  {
    name: "Nithin Raj",
    role: "global village Techpark",
    feedback: "Very well done services that exceeded expectations. Highly professional and easy to work with.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
  {
    name: "Naveen",
    role: "shoba apartments",
    feedback: "Their team made my day! The process was seamless, and they tailored everything to my needs.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
  {
    name: "Ajay",
    role: "gopalan malls",
    feedback: "I've worked with many companies, but this was by far the most intuitive and efficient.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
  {
    name: "Smith",
    role: "abc group of compaines",
    feedback: "This service is great. It does exactly what I need, and the support team was quick to resolve any issues.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Fixed Height for the Carousel */}
        <div className="flex flex-col items-center text-center h-[320px] sm:h-[350px] lg:h-[380px]">
          {testimonials[currentIndex].image ? (
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s picture`}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4"
            />
          ) : (
            <RxAvatar size={80} className="mb-4" />
          )}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
          <p className="text-sm text-gray-500 mb-2">{testimonials[currentIndex].role}</p>
          <FaBuilding size={24} className="mb-2 text-gray-400" />
          <div className="flex items-center justify-center mb-4">
            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-700 max-w-xl">{testimonials[currentIndex].feedback}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-grey-500 text-black p-2 rounded-full shadow-lg hover:bg-grey-600 transition"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-grey-500 text-black p-2 rounded-full shadow-lg hover:bg-grey-600 transition"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Dots for Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
