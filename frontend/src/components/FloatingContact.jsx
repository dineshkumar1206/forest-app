import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const FloatingContact = () => {
  return (
    /* flex-row: Horizontal on mobile
       md:flex-col: Vertical on tablets/desktop
       left-1/2 -translate-x-1/2: Centered on mobile
       md:left-3 md:translate-x-0: Back to left side on desktop
    */
    <div className="fixed left-1/2 -translate-x-1/2 md:left-3 md:translate-x-0 bottom-4 sm:bottom-5 z-50 flex flex-row md:flex-col gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm md:bg-transparent p-2 md:p-0 rounded-full shadow-lg md:shadow-none">

      {/* Phone */}
      <a
        href="tel:+919551284478"
        className="bg-[#4CAF50] hover:bg-[#3d8c40] text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
      >
        <FaPhoneAlt className="text-white text-base md:text-lg" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919551284478"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4CAF50] hover:bg-[#3d8c40] text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-white text-base md:text-lg" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/foreststay.in"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4CAF50] hover:bg-[#3d8c40] text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
      >
        <FaInstagram className="text-white text-base md:text-lg" />
      </a>

      {/* Email */}
              <a
           href="mailto:info@foreststay.com"
           className="bg-[#4CAF50] hover:bg-[#3d8c40] text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
         >
           <FaEnvelope className="text-white text-base md:text-lg" />
         </a>

    </div>
  );
};

export default FloatingContact;