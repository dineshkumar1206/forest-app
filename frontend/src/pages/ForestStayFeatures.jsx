import React, { useEffect, useRef, useState } from "react";
import { FaTree } from "react-icons/fa";

// --- CHECK ICON ---
const CheckIcon = () => (
  <div className="mt-1 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100 text-emerald-600 text-[10px] sm:text-xs">
    <FaTree />
  </div>
);

// --- FEATURE ITEM ---
const FeatureItem = ({ children }) => (
  <li className="flex items-start gap-2 sm:gap-3 group">
    <CheckIcon />
    <span className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-[0.01em] group-hover:text-gray-900 transition-colors duration-300">
      {children}
    </span>
  </li>
);

// --- CARD ---
const GridCard = ({ title, features }) => (
  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col h-full">
    
    {/* subtle gradient border glow */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-emerald-200 transition-all duration-500" />

    <div className="p-5 sm:p-6 flex flex-col h-full space-y-4">
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight leading-snug">
        {title}
      </h3>

      {/* Divider */}
      <div className="h-1 w-10 sm:w-14 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />

      {/* Features */}
      <ul className="space-y-3 sm:space-y-4 flex-grow mt-2">
        {features.map((item, index) => (
          <FeatureItem key={index}>{item}</FeatureItem>
        ))}
      </ul>
    </div>
  </div>
);

// --- ANIMATION ---
const AnimationWrapper = ({ children, visible, direction }) => (
  <div
    className={`transition-all duration-1000 transform h-full will-change-transform ${
      visible
        ? "opacity-100 translate-x-0"
        : direction === "left"
        ? "opacity-0 -translate-x-12"
        : "opacity-0 translate-x-12"
    }`}
  >
    {children}
  </div>
);

export default function ForestStayFeatures() {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);

  const [sec1Visible, setSec1Visible] = useState(false);
  const [sec2Visible, setSec2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) setSec1Visible(true);
            if (entry.target === sec2Ref.current) setSec2Visible(true);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* FIRST CARD */}
          <div ref={sec1Ref} className="group h-full">
            <AnimationWrapper visible={sec1Visible} direction="left">
              <GridCard
                title="Why Forest Stay"
                features={[
                  "Located inside a beautiful forest in Yelagiri Hills",
                  "Situated at a stunning sunset viewpoint",
                  "Private balconies with valley & skyline view",
                  "Open-air theatre with panoramic scenery",
                  "Campfire nights in a peaceful forest setting",
                  "Family & group friendly private stay",
                  "Surrounded by the fresh fragrance of eucalyptus trees",
                ]}
              />
            </AnimationWrapper>
          </div>

          {/* SECOND CARD */}
          <div ref={sec2Ref} className="group h-full">
            <AnimationWrapper visible={sec2Visible} direction="right">
              <GridCard
                title="Benefits of Eucalyptus Forest Air"
                features={[
                  "Naturally clears breathing and improves airflow",
                  "Reduces stress & fatigue with its calming aroma",
                  "Helps in better sleep & relaxation",
                  "Boosts immunity and refreshes the mind",
                  "Acts as a natural mosquito repellent",
                  "Creates a cool, clean and healthy environment",
                  "Forest Stay isn’t just a place to stay — it’s a natural wellness escape in the clouds",
                ]}
              />
            </AnimationWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}