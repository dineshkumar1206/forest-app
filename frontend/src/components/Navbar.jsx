import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-white">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          RANGER
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-green-400">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">BOOKING</a>
          <a href="#">DESTINATION</a>
          <a href="#">PAGES</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm">021 3456 789</span>
          <button className="border border-green-400 px-4 py-2 rounded hover:bg-green-500 transition">
            Book Now →
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;