import React, { useEffect, useRef, useState } from "react";
import { FaCampground, FaHotel, FaWater, FaGlassCheers } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Camping",
      icon: <FaCampground />,
      img: "/images/service1.jpg",
    },
    {
      title: "Lodging",
      icon: <FaHotel />,
      img: "/images/service2.jpg",
    },
    {
      title: "Harbor",
      icon: <FaWater />,
      img: "/images/service3.jpg",
    },
    {
      title: "Event",
      icon: <FaGlassCheers />,
      img: "/images/service4.jpg",
    },
  ];

  // ===== SCROLL ANIMATION =====
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      // Lowered threshold to 0.05 so it triggers reliably on mobile screens
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#ffffff] py-15 px-6 overflow-hidden"
    >
      {/* ===== LEFT DOT PATTERN ===== */}
      <div 
        className="absolute left-0 top-15 w-[45%] md:w-[35%] h-full pointer-events-none opacity-30"
        style={{
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)"
        }}
      >
        <div className="w-full h-full bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:14px_14px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">

        {/* ===== HEADER (ZIGZAG) ===== */}
        <div
          className={`flex items-center justify-center gap-2 md:gap-4 mb-4 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          {/* Left Zigzag */}
          <svg className="w-12 md:w-16 h-[10px]" viewBox="0 0 100 10">
            <polyline
              points="0,10 20,0 40,10 60,0 80,10 100,0"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
            />
          </svg>

          <p className="text-yellow-400 text-lg md:text-3xl tracking-[2px] md:tracking-[4px] font-semibold uppercase">
            Our Services
          </p>

          {/* Right Zigzag */}
          <svg className="w-12 md:w-16 h-[10px]" viewBox="0 0 100 10">
            <polyline
              points="0,0 20,10 40,0 60,10 80,0 100,10"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* ===== DESCRIPTION ===== */}
        {/* <p
          className={`text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 transition-all duration-1000 text-sm md:text-base ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor non semper leo quis pretium quam lacus.
        </p> */}

        {/* ===== CARDS ===== */}
        {/* Adjusted grid for mobile (1 col), tablet (2 cols), and desktop (4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {services.map((item, index) => (
            <div
              key={index}
              // Added max-w-[320px] for mobile/tablet, removing restriction on large screens
              className={`w-full max-w-[320px] lg:max-w-none relative group overflow-hidden rounded-xl shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* IMAGE */}
              {/* Responsive heights: h-56 (mobile), h-64 (tablet), h-72 (desktop) */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;