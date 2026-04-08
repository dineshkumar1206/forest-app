import React, { useState } from "react";
import Navbar from "../components/Navbar";

// ✅ MUI DATE PICKER
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Home = () => {
  // ✅ DATE STATE
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  // ✅ TEXT INPUT STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ✅ ERROR STATE
  const [errors, setErrors] = useState({});

  // ✅ HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ VALIDATION LOGIC
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    /* if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    */

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-+()\s]/g, ''))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!checkIn) newErrors.checkIn = "Check-in date is required.";
    
    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required.";
    } else if (checkIn && checkOut.isBefore(checkIn, "day")) {
      newErrors.checkOut = "Check-out must be after Check-in.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    if (validateForm()) {
      // ✅ LOG TO CONSOLE IF VALID
      const submissionData = {
        name: formData.name,
        phone: formData.phone,
        checkIn: checkIn ? checkIn.format("YYYY-MM-DD") : null,
        checkOut: checkOut ? checkOut.format("YYYY-MM-DD") : null,
      };
      
      console.log("✅ Form Submitted Successfully!", submissionData);
      alert("Form submitted! Check console for details.");
    } else {
      console.log("❌ Form Validation Failed", errors);
    }
  };

  return (
    <>
      <div className="relative min-h-screen md:h-[110vh] w-full overflow-hidden overflow-y-auto md:overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Homepage-banner.jpg"
            alt="forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full min-h-screen md:min-h-0 max-w-7xl mx-auto px-6 pt-32 md:pt-0 pb-16 md:pb-0 gap-10 md:gap-0">
          
          {/* LEFT CONTENT */}
          <div className="text-white w-full max-w-2xl font-body flex flex-col items-center text-center">
            
            <div
              className="flex items-center justify-center gap-4 mb-4 opacity-0"
              style={{ animation: "slideDown 1s ease forwards" }}
            >
              <svg className="w-12 h-[10px] hidden md:block" viewBox="0 0 100 10">
                <polyline points="0,10 20,0 40,10 60,0 80,10 100,0" fill="none" stroke="#facc15" strokeWidth="2" />
              </svg>

              <p className="text-yellow-400 tracking-[4px] text-sm font-medium uppercase">
                Forest Stay
              </p>

              <svg className="w-12 h-[10px] hidden md:block" viewBox="0 0 100 10">
                <polyline points="0,0 20,10 40,0 60,10 80,0 100,10" fill="none" stroke="#facc15" strokeWidth="2" />
              </svg>
            </div>

            <h1
              className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold tracking-[0.5px] leading-relaxed mb-6 opacity-0 text-center"
              style={{ animation: "slideUp 1s ease forwards", animationDelay: "0.3s" }}
            >
              FOREST STAY <span className="text-yellow-400 text-4xl md:text-5xl">YELAGIRI HILLS</span>
            </h1>

            <p
              className="text-gray-200 mb-8 opacity-0 text-sm md:text-base leading-relaxed text-center"
              style={{ animation: "slideUp 1s ease forwards", animationDelay: "0.5s" }}
            >
              Forest Stay, at Yelagiri is a scenic private forest stay at a beautiful 
              sunset viewpoint. Perfect for families and groups, it offers campfire, 
              a balcony open-air theatre, and stunning infinity views of towns, lakes, 
              roads, railways, and mountain ranges—along with the magical cloud-bed 
              experience on special days.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="w-full max-w-md opacity-0"
            style={{ animation: "slideUp 1s ease forwards", animationDelay: "0.7s" }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 text-white shadow-xl">
              
              <h2 className="text-xl font-semibold mb-4 text-center">
                Book Your Stay
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300 ${errors.name ? 'border-red-500' : 'border-white/30'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300 ${errors.phone ? 'border-red-500' : 'border-white/30'}`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* ADULTS & KIDS */}
                <div className="flex gap-3">
                  <input
                    type="number"
                    name="adults"
                    placeholder="Adults (13+ years)"
                    className="w-1/2 px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                  />
                  <input
                    type="number"
                    name="kids"
                    placeholder="Kids (under 12 years)"
                    className="w-1/2 px-4 py-2 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                  />
                </div>

                {/* DATE PICKERS */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="flex gap-3">

                    {/* CHECK-IN */}
                    <div className="w-1/2">
                      <DatePicker
                        label="Check In"
                        value={checkIn}
                        onChange={(newValue) => {
                          setCheckIn(newValue);
                          if (errors.checkIn) setErrors(prev => ({ ...prev, checkIn: "" }));
                        }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: !!errors.checkIn,
                            sx: {
                              "& label": { color: "rgba(255,255,255,0.7)" },
                              "& label.Mui-focused": { color: "#facc15" },
                              "& .MuiInputBase-input": {
                                color: "#fff",
                                WebkitTextFillColor: "#fff", // Forces text color
                              },
                              "& .MuiInputBase-input::placeholder": {
                                color: "rgba(255,255,255,0.5)", // Lightens MM/DD/YYYY
                                opacity: 1,
                              },
                              "& .MuiOutlinedInput-root": {
                                backgroundColor: "transparent",
                                borderRadius: "0.375rem",
                                color: "#fff",
                                "& fieldset": {
                                  borderColor: errors.checkIn ? "#f87171" : "rgba(255,255,255,0.3)",
                                },
                                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                                "&.Mui-focused fieldset": { borderColor: "#facc15" },
                              },
                              "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.7)" },
                            },
                          },
                        }}
                      />
                      {errors.checkIn && <p className="text-red-400 text-xs mt-1">{errors.checkIn}</p>}
                    </div>

                    {/* CHECK-OUT */}
                    <div className="w-1/2">
                      <DatePicker
                        label="Check Out"
                        value={checkOut}
                        onChange={(newValue) => {
                          setCheckOut(newValue);
                          if (errors.checkOut) setErrors(prev => ({ ...prev, checkOut: "" }));
                        }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: !!errors.checkOut,
                            sx: {
                              "& label": { color: "rgba(255,255,255,0.7)" },
                              "& label.Mui-focused": { color: "#facc15" },
                              "& .MuiInputBase-input": {
                                color: "#fff",
                                WebkitTextFillColor: "#fff", // Forces text color
                              },
                              "& .MuiInputBase-input::placeholder": {
                                color: "rgba(255,255,255,0.5)", // Lightens MM/DD/YYYY
                                opacity: 1,
                              },
                              "& .MuiOutlinedInput-root": {
                                backgroundColor: "transparent",
                                borderRadius: "0.375rem",
                                color: "#fff",
                                "& fieldset": {
                                  borderColor: errors.checkOut ? "#f87171" : "rgba(255,255,255,0.3)",
                                },
                                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                                "&.Mui-focused fieldset": { borderColor: "#facc15" },
                              },
                              "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.7)" },
                            },
                          },
                        }}
                      />
                      {errors.checkOut && <p className="text-red-400 text-xs mt-1">{errors.checkOut}</p>}
                    </div>

                  </div>
                </LocalizationProvider>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 mt-4"
                >
                  Book Now
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>
          {`
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-80px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(80px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>

      {/* CURVE */}
      <div className="absolute -bottom-24 left-0 w-full leading-none hidden md:block">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,20 1440,60 L1440,100 L0,100 Z" fill="#f5f5f5" />
          <path d="M0,60 C480,20 960,20 1440,60" fill="none" stroke="#facc15" strokeWidth="2" />
        </svg>
      </div>
    </>
  );
};

export default Home;