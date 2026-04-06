import React, { useEffect, useRef, useState } from "react";

const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-1"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const FeatureItem = ({ children }) => (
  <li className="flex items-start space-x-3 group">
    <CheckIcon />
    <span className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition duration-300">
      {children}
    </span>
  </li>
);

export default function ForestStayFeatures() {

  // ===== SECTION 1 =====
  const sec1Ref = useRef(null);
  const [sec1Visible, setSec1Visible] = useState(false);

  // ===== SECTION 2 =====
  const sec2Ref = useRef(null);
  const [sec2Visible, setSec2Visible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSec1Visible(true);
      },
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSec2Visible(true);
      },
      { threshold: 0.3 }
    );

    if (sec1Ref.current) observer1.observe(sec1Ref.current);
    if (sec2Ref.current) observer2.observe(sec2Ref.current);

    return () => {
      if (sec1Ref.current) observer1.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer2.unobserve(sec2Ref.current);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== SECTION 1 ===== */}
        <div
          ref={sec1Ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-28"
        >
          {/* IMAGE */}
          <div
            className={`relative group transition-all duration-1000 ${
              sec1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

            <img
              src="images/istockphoto-1419410282-612x612.jpg"
              alt=""
              className="relative w-full h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* TEXT */}
          <div
            className={`transition-all duration-1000 ${
              sec1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Forest Stay
            </h2>

            <p className="text-gray-500 mb-6 max-w-lg">
              Experience nature in its purest form with comfort, views, and unforgettable moments.
            </p>

            <ul className="space-y-4">
              <FeatureItem>Located inside a beautiful forest in Yelagiri Hills</FeatureItem>
              <FeatureItem>Situated at a stunning sunset viewpoint</FeatureItem>
              <FeatureItem>Infinity views of towns, highways, lakes, railways & Hills</FeatureItem>
              <FeatureItem>Private balconies with valley & skyline view</FeatureItem>
              <FeatureItem>Open-air theatre with panoramic scenery</FeatureItem>
              <FeatureItem>Campfire nights in a peaceful forest setting</FeatureItem>
              <FeatureItem>Family & group friendly private stay</FeatureItem>
              <FeatureItem>Easy access yet completely close to nature</FeatureItem>
              <FeatureItem>Surrounded by eucalyptus trees 🌿</FeatureItem>
            </ul>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div
          ref={sec2Ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* TEXT */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              sec2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Eucalyptus Forest Air
            </h2>

            <p className="text-gray-500 mb-6 max-w-lg">
              Breathe cleaner, fresher air while reconnecting with nature and improving your wellbeing.
            </p>

            <ul className="space-y-4">
              <FeatureItem>Naturally clears breathing and improves airflow</FeatureItem>
              <FeatureItem>Reduces stress & fatigue with its calming aroma</FeatureItem>
              <FeatureItem>Helps in better sleep & relaxation</FeatureItem>
              <FeatureItem>Boosts immunity and refreshes the mind</FeatureItem>
              <FeatureItem>Acts as a natural mosquito repellent</FeatureItem>
              <FeatureItem>Creates a cool, clean and healthy environment</FeatureItem>
              <FeatureItem>
                <span className="font-medium text-gray-900">
                  Forest Stay isn't just a place to stay — it's a wellness escape ✨
                </span>
              </FeatureItem>
            </ul>
          </div>

          {/* IMAGE */}
          <div
            className={`relative group order-1 lg:order-2 transition-all duration-1000 ${
              sec2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

            <img
              src="images/istockphoto-1206286319-612x612.jpg"
              alt=""
              className="relative w-full h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}