// src/components/Loader.jsx
import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Logo inside a subtle spinning ring */}
        <div className="relative flex items-center justify-center">
          <div className="h-40 w-40 rounded-full border-4 border-[color:var(--brand-green)] border-t-transparent animate-spin" />
          <img
            src={logo}
            alt="Chitwan Samudayik SACCOS"
            className="absolute h-30 w-auto"
          />
        </div>

        <p className="text-[12px] uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
          Loading Chitwan Samudayik SACCOS
        </p>
      </div>
    </div>
  );
};

export default Loader;
