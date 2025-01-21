"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string; // Added 'service' field
};

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Form Submitted", data);
    // Here you can send the data to your backend using fetch or axios
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
              }`}
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
              }`}
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
              }`}
              placeholder="Your Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Service Needed */}
          <div>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Service Needed
            </label>
            <select
              id="service"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.service ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
              }`}
              {...register("service", { required: "Please select a service" })}
            >
              <option value="">Select a service</option>
              <option value="House Keeping Service">House Keeping Service</option>
              <option value="Security Guards Service">Security Guards Service</option>
              <option value="Pest Control Service">Pest Control Service</option>
              <option value="School Guard Service">School Guard Service</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
              }`}
              placeholder="Your Message"
              rows={4}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
