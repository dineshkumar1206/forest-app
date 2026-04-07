import React, { useEffect, useRef, useState } from "react";

const Packages = () => {
  const packages = [
    {
      title: "Camping in Hills",
      price: "₹7,999",
      img: "/images/packages1.jpg",
    },
    {
      title: "Lake Side Camping",
      price: "₹6,499",
      img: "/images/packages2.jpg",
    },
    {
      title: "Forest Adventure Camp",
      price: "₹8,999",
      img: "/images/packages3.jpg",
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

        {/* ===== DEALS ===== */}
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

          <p className="text-yellow-500 text-2xl md:text-3xl tracking-[4px] text-sm font-semibold uppercase">
            Mega Deals
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
        {/* <h2
          className={`text-4xl md:text-5xl font-semibold mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Super Mega Deals
        </h2> */}

        {/* ===== DESCRIPTION ===== */}
        <p
          className={`text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Discover the best camping experiences with our exclusive packages
          designed for adventure lovers.
        </p>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-700 hover:-translate-y-3 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`,
              }}
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-orange-500 font-semibold">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  Experience nature like never before with premium camping
                  services and guided adventures.
                </p>

                {/* REVIEWS */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-gray-400 text-sm">
                    104 Reviews
                  </span>
                </div>

                {/* BUTTON */}
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full">
                  View Offer »
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;