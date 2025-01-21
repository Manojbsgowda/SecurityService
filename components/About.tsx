"use client";

import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Service Section */}
      <div className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img src="/assets/services_pic1.webp" alt="Security Service" className="w-full h-60 md:h-full object-cover" />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Security Solutions</h2>
            <p className="text-gray-700 leading-relaxed">
              At [Your Company Name], we provide world-class security services tailored to meet your needs. Our team of professional security
              personnel ensures safety and peace of mind for residential, commercial, and industrial properties. From on-site guards to advanced
              surveillance systems, we cover all aspects of security with unmatched dedication and expertise. Trust us to safeguard what matters most
              to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
