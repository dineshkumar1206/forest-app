import React, { useEffect, useRef, useState } from "react";

const AddOns = () => {
  const addons = [
    {
      title: "Nilavur Cliff View Point",
      img: "/images/addon2.png",
    },
    {
      title: "Perumadu Hidden Falls",
      img: "/images/addon3.png",
    },
    {
      title: "Swamimalai Trek",
      img: "/images/addon6.png",
    },
    {
      title: "Jungle Safari",
      img: "/images/addon5.png",
    },
    {
      title: "Jalagamparai Trek",
      img: "/images/addon1.png",
    },
    {
      title: "Adventure Games",
      img: "/images/addon4.png",
    },
  ];

  // ===== SCROLL ANIMATION =====
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
    <div ref={sectionRef} className="bg-[#ffffff] py-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-10 md:mb-12">
          <div
            className={`flex items-center justify-center gap-2 md:gap-4 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-20"
            }`}
          >
            <svg className="w-12 md:w-16 h-[10px]" viewBox="0 0 100 10">
              <polyline
                points="0,10 20,0 40,10 60,0 80,10 100,0"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              />
            </svg>

            <p className="text-yellow-500 text-lg md:text-3xl tracking-[2px] md:tracking-[4px] font-semibold uppercase">
              Add-ons
            </p>

            <svg className="w-12 md:w-16 h-[10px]" viewBox="0 0 100 10">
              <polyline
                points="0,0 20,10 40,0 60,10 80,0 100,10"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* ===== GRID ===== */}
        {/* Added sm:grid-cols-2 for tablets, reduced gap on mobile, and centered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {addons.map((item, index) => (
            <div
              key={index}
              // Added a max-width to keep the cards from getting overly large on mobile
              className={`w-full max-w-[320px] md:max-w-none group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 ${
                      index % 2 === 0
                        ? "translate-y-20"
                        : "-translate-y-20"
                    }`
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  // Responsive heights: h-48 (mobile), h-56 (tablet), h-64 (desktop)
                  className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* TITLE */}
              {/* Scaled text size down slightly for mobile */}
              <h3 className="text-base md:text-lg font-semibold mt-3 md:mt-4 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;