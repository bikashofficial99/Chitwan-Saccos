// src/components/Footer.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[color:var(--brand-green)] text-white mt-10">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          {/* HEAD OFFICE + LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Chitwan Samudayik SACCOS"
                className="h-14 w-auto bg-white rounded-md p-1"
              />
              <div className="leading-tight">
                <p className="text-[11px] font-semibold tracking-wide md:text-xs">
                  CHITWAN SAMUDAYIK SAVINGS &amp; CREDIT CO-OPERATIVE LTD.
                </p>
                <p className="text-[11px] text-white/80 md:text-xs">
                  चितवन सामुदायिक बचत तथा ऋण सहकारी संस्था लि.
                </p>
              </div>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wide">
              Head Office
            </p>

            <ul className="space-y-2 text-[11px] md:text-xs text-white/90">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-[2px] text-[13px]" />
                <span>Bharatpur-10, Syaulibazar, Chitwan</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[13px]" />
                <span>056-594580, 594581</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase">
                  Toll Free:
                </span>
                <span>1660-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[13px]" />
                <span>info@cs-saccos.org.np</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram className="text-xs" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaYoutube className="text-xs" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 – MAIN LINKS */}
          <div>
            <ul className="space-y-2 text-[11px] md:text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:underline">
                  Our Profile
                </a>
              </li>
              <li>
                <a href="#board" className="hover:underline">
                  Board of Directors
                </a>
              </li>
              <li>
                <a href="#management" className="hover:underline">
                  Management Team
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="#service-centers" className="hover:underline">
                  Service Centers
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – SERVICES / REPORTS */}
          <div>
            <ul className="space-y-2 text-[11px] md:text-xs">
              <li>
                <a href="#deposits" className="hover:underline">
                  Deposits
                </a>
              </li>
              <li>
                <a href="#loans" className="hover:underline">
                  Loans
                </a>
              </li>
              <li>
                <a href="#remittance" className="hover:underline">
                  Remittance
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:underline">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#atm" className="hover:underline">
                  ATM Service
                </a>
              </li>
              <li className="pt-2 border-t border-white/20 mt-2" />
              <li>
                <a href="#reports" className="hover:underline">
                  Reports
                </a>
              </li>
              <li>
                <a href="#notice" className="hover:underline">
                  Notice
                </a>
              </li>
              <li>
                <a href="#news" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#download" className="hover:underline">
                  Download
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 – ASSOCIATED ORG / EXTRA LINKS */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              Associated Branch
            </p>
            <ul className="space-y-2 text-[11px] md:text-xs">
              <li>
                <a href="#" className="hover:underline">
Malika Service Center, Bharatpur-10 Hakimchowk (056-594217)               </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
Dumrichowk Service Centre,
Ratnanagar-14  Dumrichowk (056-561641)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 text-[11px] text-white/80 md:flex-row">
          <p>Copyright © {new Date().getFullYear()} CHITWAN SAMUDAYIK SACCOS.</p>

          <div className="flex items-center gap-2">
            <p>Design &amp; Developed by</p>
            <span className="font-semibold text-white">
              KREATECH HUB
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING SCROLL TO TOP BUTTON (bottom-right) */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 z-40
          flex h-10 w-10 items-center justify-center
          rounded-full bg-white text-[color:var(--brand-green)]
          shadow-lg shadow-black/25
          hover:bg-[color:var(--brand-red)] hover:text-white
          transition
        "
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </footer>
  );
};

export default Footer;
