"use client";

import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaBuilding } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Manoj B S",
    role: "Prestige apartments",
    companyLogo: "/assets/corporate-security.webp",
    feedback:
      "I have used this company's services for years and have nothing but good things to say about it. I like the flexibility and professionalism.",
    rating: 5,
    image: "/assets/manoj-client-review.jpeg",
  },
  {
    name: "Nithin Raj",
    role: "global village Techpark",
    companyLogo: "/images/izettle-logo.png",
    feedback: "Very well done services that exceeded expectations. Highly professional and easy to work with.",
    rating: 5,
    image: "/assets/event-security.webp",
  },
  {
    name: "Naveen",
    role: "shoba apartments",
    companyLogo: "/images/recurly-logo.png",
    feedback: "Their team made my day! The process was seamless, and they tailored everything to my needs.",
    rating: 5,
    image: "",
  },
  {
    name: "Ajay",
    role: "gopalan malls",
    companyLogo: "/images/payza-logo.png",
    feedback: "I've worked with many companies, but this was by far the most intuitive and efficient.",
    rating: 5,
    image: "",
  },
  {
    name: "Smith",
    role: "abc group of compaines",
    companyLogo: "/images/neteller-logo.png",
    feedback: "This service is great. It does exactly what I need, and the support team was quick to resolve any issues.",
    rating: 5,
    image: "/images/cheryl-smith.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move the carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  return (
    <div className="bg-gray-50 py-20 px-6">
      <Header />
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / 6)}%)`,
            width: `${(testimonials.length / 6) * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-6 flex flex-col items-center text-center">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-16 h-16 rounded-full mb-4"
                />
              ) : (
                <RxAvatar size={50} />
              )}
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
              <FaBuilding size={30} />
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          ›
        </button>
      </div>

      {/* Dots for Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
