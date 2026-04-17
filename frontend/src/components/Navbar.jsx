import React from "react";

const MountainIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0  w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 lg:pb-10 text-white">

         {/*  LOGO */}
      <div className="flex items-center gap-2">
        <MountainIcon />
        <div className="mt-2">
                <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase leading-tight text-white">
                  Forest Stay
                </h2>
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-yellow-500 uppercase font-medium">
                  Camping & Telescope
                </p>
              </div>
      </div>

        {/* Menu */}
        {/* <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-green-400">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">BOOKING</a>
          <a href="#">DESTINATION</a>
          <a href="#">PAGES</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav> */}

        {/* Right Side - Contact Info */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          
          {/* Phone 1 */}
          <a 
            href="tel:+919551284478" 
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +91 95512 84478
          </a>

          {/* Phone 2 */}
          <a 
            href="tel:+918015684478" 
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +91 80156 84478
          </a>

          {/* Email */}
          <a 
            href="mailto:info@foreststay.com" 
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            info@foreststay.com
          </a>

          {/* <button className="border border-green-400 px-4 py-2 rounded hover:bg-green-500 transition">
            Book Now →
          </button> */}
        </div>

      </div>
    </header>
  );
};

export default Navbar;