import React from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegIdBadge,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full shadow bg-white">
      {/* TOP ROW: Logo + Name + Search + Office Info */}
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Chitwan Samudayik SACCOS"
            className="h-16 w-auto"
          />
          <div className="leading-tight">
            <p className="text-xs font-bold tracking-wide text-[color:var(--brand-blue)] md:text-sm">
              CHITWAN SAMUDAYIK SAVINGS &amp; CREDIT CO-OPERATIVE LTD.
            </p>
            <p className="text-[11px] text-gray-600 md:text-xs">
              चितवन सामुदायिक बचत तथा ऋण सहकारी संस्था लि.
            </p>
            <p className="mt-1 inline-block rounded-full bg-[color:var(--brand-red)] px-3 py-[2px] text-[10px] font-semibold text-white md:text-xs">
              दैनिक बचतको सुरक्षित सुरुवात
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Search + Office Details */}
        <div className="flex flex-col items-end gap-2">
          {/* Search bar */}
          <div className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-gray-600 w-[180px] md:w-[220px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-[11px] outline-none"
            />
            <FaSearch className="text-[12px]" />
          </div>

          {/* Office details */}
          <div className="flex flex-wrap justify-end items-center gap-3 text-[10px] md:text-[11px] text-gray-600">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-[color:var(--brand-green)]" />
              <span>Head Office: Bharatpur-10, Syaulibazar</span>
            </div>

            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-[color:var(--brand-green)]" />
              <span>056-594580, 594581</span>
            </div>

            <div className="flex items-center gap-1">
              <FaRegIdBadge className="text-[color:var(--brand-green)]" />
              <span>Reg. No.: 96 (054/55)</span>
            </div>
          </div>
        </div>
      </div>

     {/* MAIN NAVIGATION */}
<nav className="bg-[color:var(--brand-green)] text-white">
  <div className="mx-auto max-w-6xl px-4">
    <ul className="flex flex-wrap gap-6 text-xs md:text-[13px] font-medium py-2">
      
      {/* Home */}
      <li className="border-b-2 border-white pb-1">
        <a href="#" className="uppercase tracking-[0.18em]">Home</a>
      </li>

      {/* About dropdown */}
      <li className="relative group pb-1">
        <button className="flex items-center gap-1 uppercase tracking-[0.18em]">
          About Us
          <FaChevronDown className="text-[9px]" />
        </button>

        {/* GLASSMORPHISM DROPDOWN */}
        <div
          className="
            invisible absolute left-0 top-full z-20 mt-2 min-w-[230px]
            rounded-xl border border-white/20 
            bg-[color:var(--brand-green)]/15 
            backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            transition-all duration-200 
            opacity-0 group-hover:visible group-hover:opacity-100
          "
        >
          <a
            href="#about-intro"
            className="block px-4 py-2 text-[12px] text-[color:var(--brand-blue)] hover:bg-white/10 rounded-md"
          >
            Introduction
          </a>
          <a
            href="#about-chairman"
            className="block px-4 py-2 text-[12px] text-[color:var(--brand-blue)] hover:bg-white/10 rounded-md"
          >
            Message from Chairman
          </a>
          <a
            href="#about-team"
            className="block px-4 py-2 text-[12px] text-[color:var(--brand-blue)] hover:bg-white/10 rounded-md"
          >
            Managing Team
          </a>
        </div>
      </li>

      
            {/* SERVICES DROPDOWN */}
<li className="relative group pb-1">
  <button className="flex items-center gap-1 uppercase tracking-[0.18em]">
    Services
    <FaChevronDown className="text-[9px]" />
  </button>

  <div className="invisible absolute left-0 top-full z-20 mt-2 min-w-[230px]
    rounded-xl border border-white/20 bg-[color:var(--brand-green)] 
    shadow-[0_4px_20px_rgba(0,0,0,0.15)]
    transition-all duration-200 opacity-0 
    group-hover:visible group-hover:opacity-100">

    <Link to="/loan" className="block px-4 py-2 text-white hover:text-[color:var(--brand)] hover:bg-white/10 rounded-md">
      Loans
    </Link>
    <Link to="/deposit" className="block px-4 py-2 text-white hover:text-[color:var(--brand)] hover:bg-white/10 rounded-md">
      Deposit
    </Link>
    <Link to="/remittance" className="block px-4 py-2 text-white hover:text-[color:var(--brand)] hover:bg-white/10 rounded-md">
      Remittance
    </Link>
    <Link to="/insurance" className="block px-4 py-2 text-white hover:text-[color:var(--brand)] hover:bg-white/10 rounded-md">
      Insurance
    </Link>
  </div>
</li>

       {/* REPORTS */}
            <li>
              <Link to="/report" className="uppercase tracking-[0.18em]">Reports</Link>
            </li>

            {/* CONTACT US */}
            <li>
              <Link to="/contact" className="uppercase tracking-[0.18em]">Contact Us</Link>
            </li>

            {/* OTHER LINKS */}
            <li>
              <a href="#loan-form" className="uppercase tracking-[0.18em]">Loan Form</a>
            </li>

          </ul>
  </div>
</nav>

    </header>
  );
};

export default Navbar;
