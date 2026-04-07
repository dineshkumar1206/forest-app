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
    { 
      title: "Campfire", 
      icon: <GiCampfire />, 
      description: "Unwind by a cozy campfire during your relaxing evening forest retreat." 
    },
    { 
      title: "Breakfast", 
      icon: <FaUtensils />, 
      description: "Wake up to a delicious, freshly prepared breakfast amidst nature's tranquility." 
    },
    { 
      title: "BBQ", 
      icon: <GiBarbecue />, 
      description: "Enjoy a sizzling outdoor barbecue experience surrounded by lush woodland scenery." 
    },
    { 
      title: "Open Theater", 
      icon: <FaFilm />, 
      description: "Experience unforgettable movie nights under the stars at our open cinema." 
    },
    { 
      title: "Telescope", 
      icon: <FaBinoculars />, 
      description: "Stargaze and explore the clear night sky with our premium telescopes." 
    },
    { 
      title: "Scenic Stay", 
      icon: <FaTree />, 
      description: "Immerse yourself in nature with our picturesque and tranquil forest accommodations." 
    },
    { 
      title: "Trampoline", 
      icon: <MdOutlineSportsTennis />, 
      description: "Enjoy family-friendly fun and endless outdoor entertainment on our safe trampoline." 
    },
    { 
      title: "Free WiFi", 
      icon: <FaWifi />, 
      description: "Stay connected with high-speed internet while enjoying your remote wilderness escape." 
    },
    { 
      title: "Viewpoint", 
      icon: <FaTree />, 
      description: "Marvel at breathtaking forest panoramas from our designated scenic vantage points." 
    },
    { 
      title: "Parking", 
      icon: <FaParking />, 
      description: "Benefit from hassle-free, secure on-site vehicle parking throughout your entire stay." 
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

          <p className="text-yellow-500 text-2xl md:text-3xl  tracking-[4px] text-sm font-semibold uppercase">
            Amenities at Forest Stay
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

              {/* DYNAMIC DESCRIPTION */}
              <p className="text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;