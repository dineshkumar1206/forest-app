import React from 'react';

// --- Icons ---
const MountainIcon = () => (
  <svg className="w-8 h-8 text-white mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656..." />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246..." />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26..." />
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== TOP ===== */}
          <div className="flex flex-col items-center text-center">
            <MountainIcon />
            <h2 className="text-3xl font-bold tracking-widest uppercase">Ranger</h2>
            <p className="text-xs tracking-[0.2em] text-gray-300 mt-1 uppercase">
              Park & Camping
            </p>

            <p className="max-w-xl text-gray-300 text-sm mt-4">
              Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus.
            </p>

            {/* NAV */}
            <ul className="flex flex-wrap justify-center gap-5 mt-8 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#4CAF50]">Home</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Services</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Camping</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">About</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Contact</a></li>
            </ul>

            {/* SOCIAL ICONS (FIXED ALIGNMENT) */}
            <div className="flex items-center gap-4 mt-6">
              {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4CAF50] hover:bg-[#3d8c40] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <hr className="border-gray-500/40 my-12" />

          {/* ===== GRID ===== */}
          <div className="grid md:grid-cols-4 gap-10 text-sm">

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-300">021 Hollywood Boulevard</p>
              <p className="text-gray-300">customer@example.com</p>
              <p className="text-gray-300">(021) 345-6789</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <p>Camping</p>
              <p>Lodging</p>
              <p>Harbor</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Menu</h3>
              <p>About</p>
              <p>Booking</p>
              <p>Blog</p>
            </div>

            {/* ===== NEWSLETTER (FIXED ALIGNMENT) ===== */}
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>

              <form className="flex items-center bg-white rounded-lg overflow-hidden shadow-md h-[48px]">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 h-full px-4 text-gray-800 text-sm outline-none"
                />

                <button className="h-full px-5 bg-[#4CAF50] hover:bg-[#3d8c40] text-white text-sm font-medium flex items-center justify-center transition">
                  Subscribe
                  <MailIcon />
                </button>
              </form>
            </div>

          </div>

          {/* ===== BOTTOM ===== */}
          <div className="text-center mt-12 text-gray-300 text-sm">
            © 2026 Ranger. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}