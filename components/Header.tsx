"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import WhatsApp from "./WhatsApp";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="h-16 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          {/* Logo and Scroll to Top */}
          <div
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="flex items-center">
              <Image src="/assets/logo.webp" alt="Logo" width={40} height={40} className="mr-2 rounded-full w-14 h-14" />
              <span className="text-xl font-bold text-black">Sharp Commando</span>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-2xl focus:outline-none z-50" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row gap-10 items-center">
            <nav>
              <ul className="flex space-x-6 text-sm font-medium">
                <li>
                  <a href="#about" className="text-black text-sm font-semibold hover:text-red-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-black text-sm font-semibold hover:text-red-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-black text-sm font-semibold hover:text-red-400 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="text-black text-sm font-semibold hover:text-red-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <WhatsApp />
          </div>
        </div>
      </header>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-full`}
      >
        <button className="text-2xl absolute top-4 right-4 focus:outline-none" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>
        <ul className="flex flex-col mt-20 space-y-4 text-sm font-medium px-6">
          <li>
            <a href="#about" className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-black text-sm font-semibold hover:text-red-400 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-black text-sm font-semibold hover:text-red-400 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="text-black text-sm font-semibold hover:text-red-400 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
};

export default Header;
