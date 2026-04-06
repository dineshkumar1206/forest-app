import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[110vh] w-full overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Homepage-banner.jpg"
            alt="forest"
             className="w-full h-full object-cover"          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          
          <div className="text-white max-w-xl pl-4 md:pl-10 font-body">

            {/* ===== RANGER CAMP ===== */}
            <div
              className="flex items-center gap-4 mb-6 opacity-0"
              style={{ animation: "slideDown 1s ease forwards" }}
            >
              <svg className="w-16 h-[10px]" viewBox="0 0 100 10">
                <polyline
                  points="0,10 20,0 40,10 60,0 80,10 100,0"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-yellow-400 tracking-[4px] text-sm font-medium">
                RANGER CAMP
              </p>

              <svg className="w-16 h-[10px]" viewBox="0 0 100 10">
                <polyline
                  points="0,0 20,10 40,0 60,10 80,0 100,10"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* ===== HEADING ===== */}
            <h1
              className="font-heading text-5xl md:text-6xl font-semibold leading-tight mb-6 opacity-0"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              Welcome to Ranger State Park & Lodge
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-gray-300 mb-6 opacity-0"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.5s",
              }}
            >
              Nullam semper etiam congue lacinia nuncsit quam vel vestibulum
              faucibus dolor non semper leo.
            </p>

            {/* BUTTON */}
            <button
              className="border border-yellow-400 px-6 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-500 opacity-0"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.8s",
              }}
            >
              Learn More →
            </button>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>
          {`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-80px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(80px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>

     {/* ===== CURVE INSIDE HERO (NO GAP) ===== */}
<div className="absolute -bottom-25 left-0 w-full leading-none">
    <svg
    viewBox="0 0 1440 100"
    className="w-full h-[100px]"
    preserveAspectRatio="none"
  >
    {/* White curved shape */}
    <path
      d="M0,60 C480,20 960,20 1440,60 L1440,100 L0,100 Z"
      fill="#f5f5f5"
    />

    {/* Gold border */}
    <path
      d="M0,60 C480,20 960,20 1440,60"
      fill="none"
      stroke="#facc15"
      strokeWidth="2"
    />
  </svg>
</div>
    </>
  );
};

export default Home;