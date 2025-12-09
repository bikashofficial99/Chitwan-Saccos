import React from "react";
import { FaChevronRight } from "react-icons/fa";

const NoticeTicker = () => {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-2">
        {/* NOTICES label with little tail */}
        <div className="relative mr-4">
          <div className="bg-[color:var(--brand-green)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Notices
          </div>
          <div className="absolute right-[-10px] top-0 h-full w-3 skew-x-[20deg] bg-[color:var(--brand-green)]" />
        </div>

        {/* Scrolling text */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex ticker-anim items-center gap-8 whitespace-nowrap text-[13px] text-gray-700">
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[color:var(--brand-green)]" />
              <span>नयाँ बचत खाता खोल्नका लागि आवश्यक कागजात सम्बन्धी सूचना ।</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[color:var(--brand-green)]" />
              <span>कार्यालय समय परिवर्तन तथा सेवाग्राहीलाई जानकारी सम्बन्धी सूचना ।</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[color:var(--brand-green)]" />
              <span>वार्षिक साधारण सभा कार्यक्रम बारे सूचना ।</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
