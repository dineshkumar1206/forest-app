import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

// --- Custom Brand Icon ---
const MountainIcon = () => (
  <svg className="w-8 h-8 text-white mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

// --- Main Component ---
export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* ===== CURVE ===== */}
      <div className="absolute top-0 left-0 w-full leading-none z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            d="M0,40 C480,80 960,80 1440,40 L1440,0 L0,0 Z"
            fill="#f5f5f5"
          />
          <path
            d="M0,40 C480,80 960,80 1440,40"
            fill="none"
            stroke="#facc15"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ===== BACKGROUND ===== */}
      <div
        className="relative bg-cover bg-center pt-32 pb-10"
        style={{
          backgroundImage: "url('images/footer-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== TOP: LOGO & SOCIALS ===== */}
          <div className="flex flex-col items-center text-center">
            <MountainIcon />
            <h2 className="text-3xl font-bold tracking-widest uppercase">Forest Stay</h2>
            <p className="text-xs tracking-[0.2em] text-gray-300 mt-1 uppercase">
              Park & Camping
            </p>

            <p className="max-w-xl text-gray-300 text-sm mt-4">
              Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus.
            </p>

            {/* SOCIAL ICONS (Using react-icons) */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <hr className="border-gray-500/40 my-12" />

          {/* ===== BOTTOM GRID: ABOUT & CONTACT ===== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm text-left">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-xl mb-4 text-white">About Forest Stay</h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Forest Stay is developed by Yelagiri Hills EDC under the guidance of the Tamil Nadu Forest Department. Every stay helps protect the forest and directly supports the livelihood and welfare of Yelagiri’s tribal communities, making your visit meaningful as well as memorable.
              </p>
              <p className="text-yellow-500 font-medium mt-3 text-xs tracking-wider uppercase">
                Free Google Reviews Widget
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-white">Contact Us</h3>
              <div className="space-y-4 text-gray-300 text-base">
                <p>Forest Stay Near 12th Hairpin Bend<br/>Yelagiri Hills – 635853</p>
                
                <a 
                  href="mailto:info@foreststay.com" 
                  className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaEnvelope className="text-[#4CAF50]" />
                  info@foreststay.com
                </a>
                
                <a 
                  href="tel:+919551284478" 
                  className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaPhoneAlt className="text-[#4CAF50]" />
                  +91 95512 84478
                </a> 
                
                <a 
                  href="tel:+918015684478" 
                  className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaPhoneAlt className="text-[#4CAF50]" />
                  +91 80156 84478
                </a>
              </div>
            </div>

          </div>

          {/* ===== COPYRIGHT ===== */}
          <div className="text-center mt-16 pt-6 border-t border-gray-500/30 text-gray-400 text-sm">
            © 2026 Forest Stay. All rights reserved. Designed by AmigoWebster
          </div>

        </div>
      </div>
    </footer>
  );
}