import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed left-2 sm:left-3 bottom-4 sm:bottom-5 z-50 flex flex-col gap-2 sm:gap-3">

      {/* Phone */}
      <a
        href="tel:+919551284478"
        className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaPhoneAlt className="text-white text-lg" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919551284478"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaWhatsapp className="text-white text-lg" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaInstagram className="text-white text-lg" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@foreststay.com"
        className="bg-red-500 hover:bg-red-600 p-3 rounded-full shadow-lg transition hover:scale-110"
      >
        <FaEnvelope className="text-white text-lg" />
      </a>

    </div>
  );
};

export default FloatingContact;