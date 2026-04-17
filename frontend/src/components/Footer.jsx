import React from "react";
import { 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

const MountainIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* ===== TOP CURVE ===== */}
      <div className="absolute top-0 left-0 w-full leading-none z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-[30px] md:h-[50px]" preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,80 1440,40 L1440,0 L0,0 Z" fill="#f5f5f5" />
          <path d="M0,40 C480,80 960,80 1440,40" fill="none" stroke="#facc15" strokeWidth="2" />
        </svg>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div
        className="relative bg-cover bg-center pt-14 md:pt-20 pb-6 md:pb-8"
        style={{ backgroundImage: "url('images/footer-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Main Grid: About (Left), Logo (Center), Contact (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* 1. LEFT: About - Added md:pl-12 to avoid sticky icons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 md:pl-12">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-white border-b border-yellow-500 pb-1">
                About
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-[300px]">
                Developed by Yelagiri Hills EDC and TN Forest Department. Supporting tribal livelihoods and forest protection through sustainable tourism.
              </p>
            </div>

            {/* 2. CENTER: Brand/Logo */}
            <div className="flex flex-col items-center text-center order-1 md:order-2">
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

            {/* 3. RIGHT: Contact - Added md:pr-12 for symmetry and spacing */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right order-3 md:pr-12">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-white border-b border-yellow-500 pb-1">
                Contact Us
              </h3>
              <div className="space-y-2 text-gray-200 text-xs md:text-sm">
                <p className="leading-snug">Near 12th Hairpin Bend,<br/> Yelagiri Hills – 635853</p>
                
                <a href="mailto:info@foreststay.com" className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition-colors">
                  <FaEnvelope className="text-[#4CAF50]" size={12} /> info@foreststay.com
                </a>

                <div className="flex flex-col md:items-end space-y-1">
                   <a href="tel:+919551284478" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                     <FaPhoneAlt className="text-[#4CAF50]" size={12} /> +91 95512 84478
                   </a>
                   <a href="tel:+918015684478" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                     <FaPhoneAlt className="text-[#4CAF50]" size={12} /> +91 80156 84478
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== COPYRIGHT ===== */}
          <div className="mt-8 pt-4 border-t border-white/20 text-center">
            <p className="text-gray-400 text-xs">
              © 2026 Forest Stay. Designed by <a href="https://amigowebster.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline underline-offset-4">amigowebster</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}















