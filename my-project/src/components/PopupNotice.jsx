// src/components/PopupNotice.jsx
import React, { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import popup1 from "../assets/popupnotice1.jpg";
import popup2 from "../assets/popupnotice2.jpg";
import popup3 from "../assets/popupnotice3.jpg";

const slides = [popup1, popup2, popup3];

const PopupNotice = ({ open, onClose }) => {
  const [index, setIndex] = useState(0);

  // auto-slide only while popup is open
  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [open]);

  if (!open) return null;

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center bg-black/60">
      {/* CLICK OUTSIDE TO CLOSE */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-[51] w-[92%] max-w-xl rounded-xl bg-white shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[52] flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-green)] text-white text-xs shadow-md hover:bg-[color:var(--brand-red)]"
          aria-label="Close popup"
        >
          <FaTimes />
        </button>

        {/* Image slider */}
        <div className="relative">
          <img
            src={slides[index]}
            alt={`Notice ${index + 1}`}
            className="max-h-[80vh] w-full object-contain bg-gray-50"
          />

          {/* Prev / Next controls */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white text-xs shadow hover:bg-[color:var(--brand-green)]"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white text-xs shadow hover:bg-[color:var(--brand-green)]"
          >
            <FaChevronRight />
          </button>

          {/* dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[color:var(--brand-green)]"
                    : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupNotice;
