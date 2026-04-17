import React, { useEffect, useRef, useState } from "react";

const Packages = () => {
  const packages = [
    {
      title: "BYOT",
      price: "₹2000",
      img: "/images/packages1.jpg",
    },
    {
      title: "Tent Stay",
      price: "₹2,500",
      img: "/images/packages-2.jpg",
    },
    {
      title: "Room Stay",
      price: "₹3000",
      img: "/images/packages-3.jpg",
    }
    
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

          <p className="text-yellow-500 text-2xl md:text-3xl tracking-[4px] font-semibold uppercase">
            Our Packages
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
          Explore our handpicked selection of premium outdoor stays tailored for every type of traveler.
        </p>

        {/* ===== CARDS ===== */}
        {/* Changed from grid to flex layout.
          flex-col for mobile, md:flex-row for desktop.
          justify-center clusters them in the middle.
          md:gap-6 reduces the gap on desktop compared to a full-width grid.
        */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-6">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`w-full max-w-[320px] bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-700 hover:-translate-y-3 hover:shadow-xl ${
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
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-left">
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
                {/* <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-gray-400 text-sm">
                    104 Reviews
                  </span>
                </div> */}

                {/* BUTTON */}
               <button
               onClick={() => {
                 const section = document.getElementById("booking-form");
                 if (!section) return;
             
                 const targetPosition =
                   section.getBoundingClientRect().top + window.pageYOffset - 20; // slight offset
             
                 const startPosition = window.pageYOffset;
                 const distance = targetPosition - startPosition;
                 const duration = 1400; // 👈 increase = smoother (try 1000–1400)
             
                 let start = null;
             
                 const easeInOutCubic = (t) =>
                   t < 0.5
                     ? 4 * t * t * t
                     : 1 - Math.pow(-2 * t + 2, 3) / 2;
             
                 const animation = (currentTime) => {
                   if (!start) start = currentTime;
                   const timeElapsed = currentTime - start;
                   const progress = Math.min(timeElapsed / duration, 1);
             
                   const ease = easeInOutCubic(progress);
                   window.scrollTo(0, startPosition + distance * ease);
             
                   if (timeElapsed < duration) {
                     requestAnimationFrame(animation);
                   }
                 };
             
                 requestAnimationFrame(animation);
               }}
               className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full text-sm"
             >
               Book Now »
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