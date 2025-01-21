"use client";

import React from "react";

const services = [
  {
    title: "Corporate Security Services",
    description:
      "Our corporate security services ensure a safe and secure environment for your business operations. Our trained professionals specialize in access control, surveillance, and emergency response to safeguard your employees and assets.",
    image: "/assets/corporate-security.webp",
  },
  {
    title: "Residential Security Services",
    description:
      "We provide dedicated residential security to protect your homes and loved ones. Our services include 24/7 monitoring, patrolling, and ensuring peace of mind for your family.",
    image: "/assets/residential-security.webp",
  },
  {
    title: "Event Security Services",
    description:
      "Our event security team is equipped to handle all types of events, ensuring the safety of attendees and staff. From crowd management to emergency planning, we’ve got it covered.",
    image: "/assets/event-security.webp",
  },
  {
    title: "House Keeping Services",
    description:
      "Our professional housekeeping services ensure your space remains clean, organized, and hygienic. From daily maintenance to deep cleaning, our team is trained to meet the highest standards of cleanliness and efficiency.",
    image: "/assets/housekeeping-service.webp",
  },
];

const ServicePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Service Section */}
      <div className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Security Services</h1>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center bg-white shadow-lg rounded-lg overflow-hidden mb-12`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img src={service.image} alt={service.title} className="w-full h-60 md:h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
