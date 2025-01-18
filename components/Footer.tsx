import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 bg-gray-800 text-white shadow-md fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex items-center justify-center h-full">
        <p className="text-sm">© {new Date().getFullYear()} Security Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
