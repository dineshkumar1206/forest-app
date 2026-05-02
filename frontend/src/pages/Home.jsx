import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  // ✅ DATE STATE
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // ✅ TEXT INPUT STATE
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    adults: "",
    kids: "",
    packages: "",
  });

  // ✅ ERROR STATE
  const [errors, setErrors] = useState({});

  // ✅ HELPER TO FORMAT DATE TO DD/MM/YYYY
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // ✅ HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ VALIDATION LOGIC
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-+()\s]/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!checkIn) newErrors.checkIn = "Check-in date is required.";
    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required.";
    } else if (checkIn && new Date(checkOut) <= new Date(checkIn)) {
      newErrors.checkOut = "Check-out must be after Check-in.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePackageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      packages: e.target.value,
    }));
  };

  // ✅ HANDLE SUBMIT & WHATSAPP REDIRECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const submissionData = {
        name: formData.name,
        phone: formData.phone,
        adults: formData.adults || 0,
        kids: formData.kids || 0,
        checkIn: checkIn,
        checkOut: checkOut,
        packages: formData.packages,
      };

      try {
        const response = await fetch(
          "https://amigowebster.in/foreststay_v2/api/book",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
          }
        );

        const data = await response.json();

        if (data.success) {
          const whatsappNumber = "919551284478";
          const message =
            `*New Booking Inquiry*%0A` +
            `--------------------------%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Adults:* ${formData.adults || 0}%0A` +
            `*Kids:* ${formData.kids || 0}%0A` +
            `*Packages:* ${formData.packages || "None"}%0A` +
            `*Check-in:* ${formatDate(checkIn)}%0A` +
            `*Check-out:* ${formatDate(checkOut)}`;

          const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
          window.open(whatsappURL, "_blank");
          window.location.reload();
        } else {
          alert("Error saving booking to database.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to connect to the backend server.");
      }
    }
  };

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col bg-[#f5f5f5]">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Homepage-banner.jpg"
            alt="forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <Navbar />

        {/* CONTENT - Changed justify-between to justify-center and increased gap to move items right */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow 
        max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 
        pt-24 lg:pt-6 xl:pt-2 pb-20 md:pb-0 gap-10 lg:gap-24">
          
          {/* LEFT SIDE CONTENT - Removed negative margins to shift it more to the right */}
          <div className="text-white w-full max-w-xl font-body flex flex-col items-start text-left">
            <h1
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.5px] leading-snug mb-2 md:mb-3 lg:mb-4 opacity-0 text-left"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              YELAGIRI HILLS
            </h1>

            <p
              className="text-gray-200 mb-4 md:mb-6 lg:mb-0 opacity-0 text-sm md:text-base leading-relaxed text-left lg:mt-1"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.5s",
              }}
            >
              Forest Stay, at Yelagiri is a scenic private forest stay at a
              beautiful sunset viewpoint. Perfect for families and groups, it
              offers campfire, a balcony open-air theatre, and stunning infinity
              views of towns, lakes, roads, railways, and mountain ranges along
              with the magical cloud-bed experience on special days.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            id="booking-form"
            className="w-full mt-10 max-w-xl opacity-0"
            style={{
              animation: "slideUp 1s ease forwards",
              animationDelay: "0.7s",
            }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 text-white shadow-xl">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Book Your Stay
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300 ${
                      errors.name ? "border-red-500" : "border-white/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300 ${
                      errors.phone ? "border-red-500" : "border-white/30"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="Adults (13+ years)"
                    className="w-1/2 px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                  />
                  <input
                    type="number"
                    name="kids"
                    value={formData.kids}
                    onChange={handleChange}
                    placeholder="Kids (5 - 12 years)"
                    className="w-1/2 px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                  />
                </div>

                <div>
                  <p className="text-sm mb-3 text-white/80">Select Package</p>
                  {/* TABS SIZE INCREASED: changed px-3 to px-5 and text-xs to text-sm */}
                  <div className="flex gap-2 flex-wrap md:flex-nowrap pb-2">
                    {["BYOT", "Tent Stay", "Room Stay", "British Bunglow"].map((pkg) => {
                      const isSelected = formData.packages === pkg;
                      return (
                        <label
                          key={pkg}
                          className={`cursor-pointer px-5 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 
                          ${
                            isSelected
                              ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
                              : "border-white/30 text-white hover:border-yellow-400 hover:text-yellow-400"
                          }`}
                        >
                          <input
                            type="radio"
                            name="package"
                            value={pkg}
                            onChange={handlePackageChange}
                            checked={isSelected}
                            className="hidden"
                          />
                          {pkg}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-1/2 relative group">
                    <label className="text-xs text-white/70 mb-1 block pl-1">
                      Check In
                    </label>
                    <div
                      className={`relative flex items-center w-full px-4 py-2 bg-transparent border rounded-md group-focus-within:border-yellow-400 transition-colors ${
                        errors.checkIn ? "border-red-500" : "border-white/30"
                      }`}
                    >
                      <span
                        className={`flex-1 ${
                          checkIn ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {checkIn ? formatDate(checkIn) : "DD/MM/YYYY"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white/70"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => {
                          setCheckIn(e.target.value);
                          if (errors.checkIn)
                            setErrors((prev) => ({ ...prev, checkIn: "" }));
                        }}
                        className="date-overlay absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.checkIn && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div className="w-1/2 relative group">
                    <label className="text-xs text-white/70 mb-1 block pl-1">
                      Check Out
                    </label>
                    <div
                      className={`relative flex items-center w-full px-4 py-2 bg-transparent border rounded-md group-focus-within:border-yellow-400 transition-colors ${
                        errors.checkOut ? "border-red-500" : "border-white/30"
                      }`}
                    >
                      <span
                        className={`flex-1 ${
                          checkOut ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {checkOut ? formatDate(checkOut) : "DD/MM/YYYY"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white/70"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => {
                          setCheckOut(e.target.value);
                          if (errors.checkOut)
                            setErrors((prev) => ({ ...prev, checkOut: "" }));
                        }}
                        className="date-overlay absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    {errors.checkOut && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 mt-4"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(80px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .date-overlay::-webkit-calendar-picker-indicator {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Home;