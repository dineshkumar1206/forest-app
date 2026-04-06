import React, { useEffect, useRef, useState } from "react";

// --- CHECK ICON ---
const CheckIcon = () => (
  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
    <svg
      className="w-3.5 h-3.5 text-emerald-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

// --- FEATURE ITEM ---
const FeatureItem = ({ children }) => (
  <li className="flex items-start gap-3 group">
    <CheckIcon />
    <span className="text-gray-600 leading-relaxed tracking-[0.01em] group-hover:text-gray-900 transition-colors duration-300">
      {children}
    </span>
  </li>
);

// --- CARD ---
const GridCard = ({ image, title, features }) => (
  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col h-full">
    {/* subtle gradient border glow */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-emerald-200" />

    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>

    <div className="p-8 space-y-6">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight leading-snug">
        {title}
      </h3>

      {/* Divider */}
      <div className="h-px w-16 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />

      {/* Features */}
      <ul className="space-y-4">
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
    className={`transition-all duration-1000 transform will-change-transform ${
      visible
        ? "opacity-100 translate-x-0"
        : direction === "left"
        ? "opacity-0 -translate-x-16"
        : "opacity-0 translate-x-16"
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
      { threshold: 0.3 }
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">
          {/* FIRST CARD */}
          <div ref={sec1Ref} className="group">
            <AnimationWrapper visible={sec1Visible} direction="left">
              <GridCard
                image="images/istockphoto-1419410282-612x612.jpg"
                title="Why Forest Stay"
                features={[
                  "Located inside a beautiful forest in Yelagiri Hills",
                  "Situated at a stunning sunset viewpoint",
                  "Infinity views of towns, highways, lakes, railways & Hills",
                  "Private balconies with valley & skyline view",
                  "Open-air theatre with panoramic scenery",
                  "Campfire nights in a peaceful forest setting",
                  "Family & group friendly private stay",
                  "Easy access yet completely close to nature",
                  "Surrounded by the fresh fragrance of eucalyptus trees",
                ]}
              />
            </AnimationWrapper>
          </div>

          {/* SECOND CARD */}
          <div ref={sec2Ref} className="group">
            <AnimationWrapper visible={sec2Visible} direction="right">
              <GridCard
                image="images/istockphoto-1206286319-612x612.jpg"
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
