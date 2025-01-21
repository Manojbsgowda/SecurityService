"use client";
import React from "react";
import AboutUsPage from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicePage from "@/components/ServicePage";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="pt-16 pb-16 relative">
      <Header />

      <section id="home" className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Security Services</h1>
        <p className="text-center">Your trusted partner in providing world-class security solutions.</p>
      </section>

      <section id="about">
        <AboutUsPage />
      </section>

      <section id="services">
        <ServicePage />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
}
