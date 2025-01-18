"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsApp from "./WhatsApp";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="h-16 bg-white text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          <Link href="/">
            <div className="flex items-center">
              <Image src="/assets/logo.webp" alt="Logo" width={40} height={40} className="mr-2 rounded-full w-14 h-1w-14" />
              <span className="text-xl font-bold text-black ">Sharp Commando</span>
            </div>
          </Link>

          <button className="md:hidden text-2xl focus:outline-none" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            ☰
          </button>

          <div className="flex flex-row gap-10 items-center">
            <nav className="hidden md:flex">
              <ul className="flex space-x-6 text-sm font-medium">
                <li>
                  <Link href="/">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">About</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">Gallery</p>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">Testimonials</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors">Contact Us</p>
                  </Link>
                </li>
              </ul>
            </nav>
            <WhatsApp />
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white text-white shadow-lg z-40">
          <button className="text-2xl text-white absolute top-4 right-4 focus:outline-none" onClick={() => setSidebarOpen(false)}>
            ×
          </button>
          <ul className="flex flex-col mt-16 space-y-4 text-sm font-medium px-6">
            <li>
              <Link href="/">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  Gallery
                </p>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  Testimonials
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <p className="text-black text-sm font-semibold hover:text-red-400 transition-colors" onClick={() => setSidebarOpen(false)}>
                  Contact Us
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
};

export default Header;
