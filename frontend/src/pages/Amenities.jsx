import React, { useEffect, useRef, useState } from "react";
import {
  FaFire,
  FaUtensils,
  FaWifi,
  FaParking,
  FaTree,
  FaFilm,
  FaBinoculars,
  FaMountain
} from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { GiCampfire, GiBarbecue } from "react-icons/gi";

const Amenities = () => {
  const amenities = [
    { 
      title: "Scenic Stay", 
      icon: <FaTree />, 
      description: "Wake up to breathtaking panoramic views in our eco-friendly cabins, designed for travelers seeking the ultimate tranquil nature retreat." 
    },
    { 
      title: "Campfire", 
      icon: <GiCampfire />, 
      description: "Unwind by a cozy campfire during your relaxing evening forest retreat." 
    },
    { 
      title: "Open Theater", 
      icon: <FaFilm />, 
      description: "Experience unforgettable movie nights under the stars at our open cinema." 
    },
    { 
      title: "Telescope", 
      icon: <FaBinoculars />, 
      description: "Explore the wonders of the universe with our high-powered telescopes, offering crystal-clear views of constellations far from city light pollution." 
    },
    { 
      title: "Trampoline", 
      icon: <MdOutlineSportsTennis />, 
      description: "Our professional-grade, safe outdoor trampoline provides endless entertainment for kids, making it the perfect highlight for a family-friendly forest getaway." 
    },
    { 
      title: "WiFi", 
      icon: <FaWifi />, 
      description: "Stay connected with high-speed internet while enjoying your remote wilderness escape." 
    },
    { 
      title: "Viewpoint", 
      icon: <FaMountain />, 
      description: "Marvel at breathtaking forest panoramas from our designated scenic vantage points." 
    },
    { 
      title: "Parking", 
      icon: <FaParking />, 
      description: "Benefit from hassle-free, secure on-site vehicle parking throughout your entire stay." 
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } 
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
    <div ref={sectionRef} className="bg-[#f5f5f5] py-4 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <div
          className={`flex items-center justify-center gap-2 md:gap-4 mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
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

          <p className="text-yellow-500 text-lg md:text-3xl tracking-[2px] md:tracking-[4px] font-semibold uppercase text-center">
            Amenities at Forest Stay
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

        {/* DESCRIPTION */}
        <p
          className={`text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-1000 text-sm md:text-base ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Enjoy a comfortable and adventurous stay with our amenity facilities
          designed for nature lovers.
        </p>

        {/* GRID */}
        {/* ✅ MOBILE: 4 columns */}
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`border border-dashed border-gray-300 p-3 md:p-6 rounded-lg text-center bg-white hover:shadow-lg transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 ${
                      index % 2 === 0
                        ? "translate-y-20"
                        : "-translate-y-20"
                    }`
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-yellow-200 flex items-center justify-center text-lg md:text-2xl text-gray-800">
                {item.icon}
              </div>

              <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-[10px] md:text-sm hidden md:block">
                {/* <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-sm leading-tight"> */}
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