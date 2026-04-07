import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

// ✅ MUI DATE PICKER
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const Home = () => {
  // ✅ STATE (changed to dayjs)
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  // ✅ REFS (kept as it is)
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  return (
    <>
      {/* HERO SECTION - Changed h-[110vh] to min-h-screen for mobile scrolling */}
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

        {/* CONTENT - Added flex-col for mobile stacking, gap-10 for spacing, pt-32 to clear navbar */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full min-h-screen md:min-h-0 max-w-7xl mx-auto px-6 pt-32 md:pt-0 pb-16 md:pb-0 gap-10 md:gap-0">
          
         {/* LEFT CONTENT */}
          {/* Changed max-w-xl to max-w-2xl and removed md:pl-10 to give the text more width */}
          <div className="text-white w-full max-w-2xl font-body flex flex-col items-center text-center">
            
            <div
              className="flex items-center justify-center gap-4 mb-4 opacity-0"
              style={{ animation: "slideDown 1s ease forwards" }}
            >
              <svg className="w-12 h-[10px] hidden md:block" viewBox="0 0 100 10">
                <polyline
                  points="0,10 20,0 40,10 60,0 80,10 100,0"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-yellow-400 tracking-[4px] text-sm font-medium uppercase">
                Forest Stay
              </p>

              <svg className="w-12 h-[10px] hidden md:block" viewBox="0 0 100 10">
                <polyline
                  points="0,0 20,10 40,0 60,10 80,0 100,10"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h1
              className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold tracking-[0.5px] leading-relaxed mb-6 opacity-0 text-center"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              {/* Added whitespace-nowrap to guarantee it stays on one line on desktop */}
              <span className="block md:whitespace-nowrap">TAMIL NADU FOREST DEPARTMENT’S</span>
              FOREST STAY <span className="text-yellow-400 text-4xl md:text-5xl">YELAGIRI HILLS</span>
            </h1>

            <p
              className="text-gray-200 mb-8 opacity-0 text-sm md:text-base leading-relaxed text-center"
              style={{
                animation: "slideUp 1s ease forwards",
                animationDelay: "0.5s",
              }}
            >
              Forest Stay, at Yelagiri is a scenic private forest stay at a beautiful 
              sunset viewpoint. Perfect for families and groups, it offers campfire, 
              a balcony open-air theatre, and stunning infinity views of towns, lakes, 
              roads, railways, and mountain ranges—along with the magical cloud-bed 
              experience on special days.
            </p>
          </div>

          {/* RIGHT SIDE FORM - Removed hidden md:block so it shows on mobile */}
          <div
            className="w-full max-w-md opacity-0"
            style={{
              animation: "slideUp 1s ease forwards",
              animationDelay: "0.7s",
            }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 text-white shadow-xl">
              
              <h2 className="text-xl font-semibold mb-4 text-center">
                Book Your Stay
              </h2>

              <form className="space-y-4">
                
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:border-yellow-400 text-white placeholder-gray-300"
                />

                {/* ✅ MUI DATE PICKERS */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="flex gap-3">
                    
                    {/* CHECK-IN */}
                    <div className="w-1/2">
                      <DatePicker
                        label="Check In"
                        value={checkIn}
                        onChange={(newValue) => setCheckIn(newValue)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            sx: {
                              "& label": { color: "#fff" },
                              "& .MuiInputBase-input": {
                                color: "#fff",
                                WebkitTextFillColor: "#fff",
                              },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#facc15",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#facc15",
                                },
                              },
                              "& .MuiSvgIcon-root": { color: "#fff" },
                            },
                          },
                          popper: {
                            sx: {
                              "& .MuiPaper-root": {
                                background: "rgba(255,255,255,0.08)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                              },
                              "& .MuiPickersDay-root": {
                                color: "#fff",
                              },
                              "& .MuiPickersDay-root.Mui-selected": {
                                backgroundColor: "#facc15",
                                color: "#ffffff",
                              },
                              "& .MuiPickersDay-root:hover": {
                                backgroundColor: "rgba(255,255,255,0.1)",
                              },
                              "& .MuiPickersCalendarHeader-label": {
                                color: "#fff",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#fff",
                              },
                            },
                          },
                        }}
                      />
                    </div>

                    {/* CHECK-OUT */}
                    <div className="w-1/2">
                      <DatePicker
                        label="Check Out"
                        value={checkOut}
                        onChange={(newValue) => setCheckOut(newValue)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            sx: {
                              "& label": { color: "#fff" },
                              "& .MuiInputBase-input": {
                                color: "#fff",
                                WebkitTextFillColor: "#fff",
                              },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#facc15",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#facc15",
                                },
                              },
                              "& .MuiSvgIcon-root": { color: "#fff" },
                            },
                          },
                          popper: {
                            sx: {
                              "& .MuiPaper-root": {
                                background: "rgba(255,255,255,0.08)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                              },
                              "& .MuiPickersDay-root": {
                                color: "#fff",
                              },
                              "& .MuiPickersDay-root.Mui-selected": {
                                backgroundColor: "#facc15",
                                color: "#ffffff",
                              },
                              "& .MuiPickersDay-root:hover": {
                                backgroundColor: "rgba(255,255,255,0.1)",
                              },
                              "& .MuiPickersCalendarHeader-label": {
                                color: "#fff",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#fff",
                              },
                            },
                          },
                        }}
                      />
                    </div>

                  </div>
                </LocalizationProvider>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
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
              from {
                opacity: 0;
                transform: translateY(-80px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(80px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>

      {/* CURVE */}
      <div className="absolute -bottom-24 left-0 w-full leading-none hidden md:block">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C480,20 960,20 1440,60 L1440,100 L0,100 Z"
            fill="#f5f5f5"
          />
          <path
            d="M0,60 C480,20 960,20 1440,60"
            fill="none"
            stroke="#facc15"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
};

export default Home;