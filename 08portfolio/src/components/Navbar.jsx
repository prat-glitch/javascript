import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 px-6 py-4 flex justify-end items-center">
      <a
        href="#contact"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   text-white px-6 py-2 rounded-full shadow-lg font-semibold 
                   hover:from-pink-500 hover:to-yellow-500 
                   transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
      >
        Get in Touch
      </a>
    </nav>
  );
};

export default Navbar;
