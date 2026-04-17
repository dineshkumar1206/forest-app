import React, { useEffect, useRef, useState } from "react";

const AddOns = () => {
  const addons = [
    { title: "Nilavur Cliff View Point", img: "/images/addon2.png", price: "100" },
    { title: "Perumadu Hidden Falls", img: "/images/addon3.png", price: "500" },
    { title: "Swamimalai Trek", img: "/images/addon6.png", price: "500" },
    { title: "Jungle Safari", img: "/images/addon.jpg", price: "1000" },
    { title: "Jalagamparai Trek", img: "/images/addon1.png", price: "500" },
    { title: "Adventure Games", img: "/images/addon4.png", price: "500" },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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
      className="bg-[#f9fafb] py-8 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <div
            className={`flex items-center justify-center gap-4 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
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

           <p className="text-yellow-500 text-2xl md:text-3xl tracking-[4px] font-semibold uppercase">
            Adds On
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
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
  {addons.map((item, index) => (
    <div
      key={index}
      className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md group transition-all duration-700 hover:shadow-xl ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* IMAGE - Reduced height for mobile to maintain a good aspect ratio in 2-column mode */}
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-28 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT AREA */}
      <div className="p-2 md:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <h3 className="text-xs md:text-lg font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
          <span className="text-orange-600 font-bold text-xs md:text-lg">
            ₹{item.price}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default AddOns;