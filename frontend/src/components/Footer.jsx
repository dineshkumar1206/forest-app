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
// Reduced icon size from w-8/h-8 to w-6/h-6
const MountainIcon = () => (
  <svg className="w-6 h-6 text-white mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

// --- Main Component ---
export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* ===== CURVE ===== */}
      <div className="absolute top-0 left-0 w-full leading-none z-20">
        {/* Reduced fixed height of the curve to save vertical space */}
        <svg viewBox="0 0 1440 100" className="w-full h-[50px] md:h-[80px]" preserveAspectRatio="none">
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
      {/* Drastically reduced padding: pt-32 -> pt-16 md:pt-24, pb-10 -> pb-6 md:pb-8 */}
      <div
        className="relative bg-cover bg-center pt-16 md:pt-24 pb-6 md:pb-8"
        style={{
          backgroundImage: "url('images/footer-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== TOP: LOGO & SOCIALS ===== */}
          <div className="flex flex-col items-center text-center">
            <MountainIcon />
            {/* Reduced text size: text-3xl -> text-xl md:text-2xl */}
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase">Forest Stay</h2>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-300 mt-1 uppercase">
              Park & Camping
            </p>

            {/* <p className="max-w-xl text-gray-300 text-xs md:text-sm mt-3">
              Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus.
            </p> */}

            {/* SOCIAL ICONS (Using react-icons) */}
            {/* Scaled down icon wrappers to w-8 h-8 and icon size to 14 */}
            <div className="flex items-center gap-3 mt-4 md:mt-5">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] text-white transition duration-300">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Reduced divider margin: my-12 -> my-6 md:my-8 */}
          <hr className="border-gray-500/40 my-6 md:my-8" />

          {/* ===== BOTTOM GRID: ABOUT & CONTACT ===== */}
          {/* Reduced grid gap from 12 to 6/8 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-sm text-left">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              {/* Reduced heading sizes */}
              <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">About Forest Stay</h3>
              <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                Forest Stay is developed by Yelagiri Hills EDC under the guidance of the Tamil Nadu Forest Department. Every stay helps protect the forest and directly supports the livelihood and welfare of Yelagiri’s tribal communities, making your visit meaningful as well as memorable.
              </p>
              <p className="text-yellow-500 font-medium mt-2 text-[10px] md:text-xs tracking-wider uppercase">
                Free Google Reviews Widget
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Contact Us</h3>
              {/* Tightened vertical spacing on contact list */}
              <div className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm">
                <p>Forest Stay Near 12th Hairpin Bend<br/>Yelagiri Hills – 635853</p>
                
                <a 
                  href="mailto:info@foreststay.com" 
                  className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaEnvelope className="text-[#4CAF50]" />
                  info@foreststay.com
                </a>
                
                <a 
                  href="tel:+919551284478" 
                  className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaPhoneAlt className="text-[#4CAF50]" />
                  +91 95512 84478
                </a> 
                
                <a 
                  href="tel:+918015684478" 
                  className="flex items-center gap-2 md:gap-3 hover:text-yellow-400 transition duration-300"
                >
                  <FaPhoneAlt className="text-[#4CAF50]" />
                  +91 80156 84478
                </a>
              </div>
            </div>

          </div>

          {/* ===== COPYRIGHT ===== */}
          {/* Reduced margin and padding: mt-16 pt-6 -> mt-8 pt-4 md:mt-10 md:pt-5 */}
          <div className="text-center mt-8 md:mt-10 pt-4 md:pt-5 border-t border-gray-500/30 text-gray-400 text-[10px] md:text-xs">
            © 2026 Forest Stay. All rights reserved. Designed by <a href="https://amigowebster.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">amigowebster</a>
          </div>

        </div>
      </div>
    </footer>
  );
}