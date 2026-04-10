import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Arvin Arvn",
    initials: "AA",
    review: "Surrounded by nature, the stay offers solitude with stunning views. Homely food and great service.",
  },
  {
    name: "KR Cholarajan",
    initials: "KC",
    review: "The Forest Department created a peaceful experience. Clean surroundings and well-maintained facilities.",
  },
  {
    name: "Srilekha M",
    initials: "SM",
    review: "The campfire setup was cozy and well-organized. Calm atmosphere helped me relax and disconnect.",
  },
  {
    name: "Rubika Agriculturist",
    initials: "RA",
    review: "Amazing travel destination. Filled with nature beauty. You'll lose track of time by the campfire.",
  },
  {
    name: "Dayalan Munusamy",
    initials: "DM",
    review: "Safe and secure place. Very pleasant view. Good caring staffs.",
  },
  {
    name: "Suganya Sekar",
    initials: "SS",
    review: "A blissful place for family and friends. Nice ambience and close to nature.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Testimonials = () => {
  return (
    <section className="relative bg-[#f9fafb] py-8 px-4 md:py-10 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <svg className="w-10 md:w-16 h-[10px]" viewBox="0 0 100 10">
              <polyline points="0,10 20,0 40,10 60,0 80,10 100,0" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </svg>
            <p className="text-yellow-500 text-2xl md:text-3xl tracking-[4px] font-semibold uppercase">
            Testimonials
            </p>
            <svg className="w-10 md:w-16 h-[10px]" viewBox="0 0 100 10">
              <polyline points="0,0 20,10 40,0 60,10 80,0 100,10" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>

        {/* ===== GRID (2 cols on mobile, 3 cols on desktop) ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          {reviews.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white p-4 md:p-8 rounded-xl md:rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 md:gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-700 leading-snug md:leading-relaxed font-medium text-xs md:text-lg italic mb-4">
                  "{item.review}"
                </p>
              </div>

              <div className="flex items-center gap-2 md:gap-4 mt-auto">
                <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg md:rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 text-[10px] md:text-base font-bold shadow-inner shrink-0">
                  {item.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] md:text-base font-bold text-slate-900 truncate">{item.name}</span>
                  <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter md:tracking-widest">Verified Reviewer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;