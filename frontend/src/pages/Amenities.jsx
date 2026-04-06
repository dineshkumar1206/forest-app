import React, { useEffect, useRef, useState } from "react";
import {
  FaFire,
  FaUtensils,
  FaWifi,
  FaParking,
  FaTree,
  FaFilm,
  FaBinoculars,
} from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { GiCampfire, GiBarbecue } from "react-icons/gi";

const Amenities = () => {
  const amenities = [
    { title: "Campfire", icon: <GiCampfire /> },
    { title: "Breakfast", icon: <FaUtensils /> },
    { title: "BBQ", icon: <GiBarbecue /> },
    { title: "Open Theater", icon: <FaFilm /> },
    { title: "Telescope", icon: <FaBinoculars /> },
    { title: "Scenic Stay", icon: <FaTree /> },
    { title: "Trampoline", icon: <MdOutlineSportsTennis /> },
    { title: "Free WiFi", icon: <FaWifi /> },
    { title: "Viewpoint", icon: <FaTree /> },
    { title: "Parking", icon: <FaParking /> },
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#f5f5f5] py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== TITLE ===== */}
        <div
          className={`flex items-center justify-center gap-4 mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <svg className="w-16 h-[10px]" viewBox="0 0 100 10">
            <polyline
              points="0,10 20,0 40,10 60,0 80,10 100,0"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />
          </svg>

          <p className="text-yellow-500 tracking-[4px] text-sm font-semibold uppercase">
            Featured
          </p>

          <svg className="w-16 h-[10px]" viewBox="0 0 100 10">
            <polyline
              points="0,0 20,10 40,0 60,10 80,0 100,10"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* ===== HEADING ===== */}
        <h2
          className={`text-4xl md:text-5xl font-semibold mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Amenities at Forest Stay
        </h2>

        {/* ===== DESCRIPTION ===== */}
        <p
          className={`text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Enjoy a comfortable and adventurous stay with our premium facilities
          designed for nature lovers.
        </p>

        {/* ===== GRID ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`border border-dashed border-gray-300 p-6 rounded-lg text-center bg-white hover:shadow-lg transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 ${
                      index % 2 === 0
                        ? "translate-y-20"     // odd cards → from bottom
                        : "-translate-y-20"    // even cards → from top
                    }`
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* ICON */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-200 flex items-center justify-center text-2xl text-gray-800">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                Enjoy premium facilities during your forest stay experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;