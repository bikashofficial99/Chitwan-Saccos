import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import {
  FaCheckCircle,
  FaFileAlt,
  FaHandshake,
  FaChartLine,
  FaLeaf,
  FaHome,
  FaClipboardList,
  FaRegClock,
  FaBriefcase,
  FaGraduationCap,
  FaFirstAid,
  FaPlaneDeparture,
  FaChevronRight,
  FaFolderOpen,
  FaCheck,
} from "react-icons/fa";

import heroImage from "../assets/chinari.jpg";
import introImage from "../assets/chinari1.jpg";
import Footer from "../components/Footer"; // make sure you have Footer component

const Loan = () => {
  const [flipped, setFlipped] = useState(null);
  const [hovered, setHovered] = useState(null);

  const loanTypes = [
    {
      title: "Business Loan",
      icon: <FaChartLine />,
      border: "var(--brand-green)",
      points: [
        "Ideal for startup investment",
        "Funds for expansion & growth",
        "Structured repayment plans",
      ],
    },
    {
      title: "Personal Loan",
      icon: <FaHandshake />,
      border: "var(--brand-green)",
      points: [
        "Covers education & medical needs",
        "Quick approval process",
        "Flexible repayment options",
      ],
    },
    {
      title: "Agriculture Loan",
      icon: <FaLeaf />,
      border: "var(--brand-green)",
      points: [
        "For seeds, livestock & inputs",
        "Buy/lease farm equipment",
        "Support for seasonal cycles",
      ],
    },
    {
      title: "Career Loan",
      icon: <FaBriefcase />,
      border: "var(--brand-green)",
      points: [
        "Funds for upskilling & training",
        "Certification & exam fees",
        "Career-building support",
      ],
    },
    {
      title: "Education Loan",
      icon: <FaGraduationCap />,
      border: "var(--brand-green)",
      points: [
        "Tuition & academic fees",
        "Books & living allowance",
        "Support for higher studies",
      ],
    },
    {
      title: "Home Loan",
      icon: <FaHome />,
      border: "var(--brand-green)",
      points: [
        "Construction & renovation",
        "Purchase assistance",
        "Long-term repayment options",
      ],
    },
    {
      title: "Emergency Loan",
      icon: <FaFirstAid />,
      border: "var(--brand-green)",
      points: [
        "Fast medical support",
        "Immediate short-term relief",
        "Quick disbursement",
      ],
    },
    {
      title: "Foreign Employment Loan",
      icon: <FaPlaneDeparture />,
      border: "var(--brand-green)",
      points: [
        "Covers visa & processing fees",
        "Travel & documentation costs",
        "Support for overseas placement",
      ],
    },
  ];

  const isFlipped = (index) => flipped === index || hovered === index;

  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[480px] md:h-[650px] overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <div className="text-sm mb-6 opacity-80">
            <span className="cursor-pointer hover:opacity-100">Home</span> /{" "}
            <span className="opacity-100 font-semibold">Loan Services</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            Loan Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-5 text-sm md:text-lg opacity-90 max-w-2xl mx-auto"
          >
            Transparent, reliable and member–focused loan facilities designed to uplift your financial goals.
          </motion.p>
        </div>
      </section>

      <div className="h-10 md:h-16"></div>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white via-emerald-800 to-[#f6a800] text-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-xl md:text-3xl font-bold">Our Loan Facilities</h2>
            <p className="leading-7 text-sm md:text-base opacity-90">
              Chitwan Samudayik Savings & Credit Cooperative provides multiple loan types
              tailored for business, agriculture, education, home, and personal growth.
              We aim to support your goals with flexible plans and easy processing.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={introImage}
              alt="Our Loan Facilities"
              className="w-full h-[350px] md:h-[400px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= COUNTER ================= */}
      <section ref={counterRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { title: "Loans Disbursed", count: 1200, color: "var(--brand-red)" },
            { title: "Satisfied Members", count: 950, color: "var(--brand-green)" },
            { title: "Years of Service", count: 20, color: "var(--brand-blue)" },
            { title: "Branches", count: 15, color: "var(--brand-red)" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-4xl font-bold" style={{ color: item.color }}>
                {counterInView ? <CountUp end={item.count} duration={2} /> : 0}+
              </h3>
              <p className="text-gray-700 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FLIPCARD ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg md:text-3xl font-semibold text-[color:var(--brand-green)] mb-10">
            Available Loan Types
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {loanTypes.map((item, index) => {
              const containerStyle = {
                width: "100%",
                height: "100%",
                transition: "transform 700ms",
                transformStyle: "preserve-3d",
                transform: isFlipped(index) ? "rotateY(180deg)" : "rotateY(0deg)",
              };

              const faceStyle = {
                position: "absolute",
                inset: 0,
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                borderLeftWidth: "4px",
                borderLeftStyle: "solid",
                borderLeftColor: item.border,
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                background: "#fff",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              };

              const backStyle = { ...faceStyle, transform: "rotateY(180deg)", textAlign: "center" };

              return (
                <div
                  key={index}
                  className="relative h-64 cursor-pointer"
                  style={{ perspective: "1200px" }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setFlipped((prev) => (prev === index ? null : index))}
                  onTouchStart={() => setFlipped((prev) => (prev === index ? null : index))}
                >
                  <div style={containerStyle}>
                    <div style={faceStyle}>
                      <div className="text-[color:var(--brand-green)] text-6xl mb-4">{item.icon}</div>
                      <h4 className="font-semibold text-lg text-[color:var(--brand-green)]">{item.title}</h4>
                    </div>
                    <div style={backStyle}>
                      <ul className="text-gray-700 text-sm space-y-2 text-left">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-[color:var(--brand-green)] mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--brand-green)] via-emerald-800 to-[#f6a800] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-bold mb-12 text-center">Loan Application Process</h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 rounded-full"></div>
            <div className="grid md:grid-cols-4 gap-10">
              {[
                { title: "Submit Application", icon: <FaClipboardList /> },
                { title: "Document Verification", icon: <FaFileAlt /> },
                { title: "Approval Decision", icon: <FaRegClock /> },
                { title: "Loan Disbursement", icon: <FaHandshake /> },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md p-7 rounded-xl shadow-md border border-white/20 relative"
                >
                  <div className="text-4xl mx-auto mb-4 text-white">{step.icon}</div>
                  <h4 className="font-medium text-base text-center text-white">{step.title}</h4>
                  {i < 3 && (
                    <FaChevronRight className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 text-white/60 text-xl" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-bold text-[color:var(--brand-green)] mb-10 text-center">
            Required Documents
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white shadow-xl rounded-xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaFolderOpen className="text-[color:var(--brand-green)] text-3xl" />
              <h4 className="text-lg font-semibold text-gray-800">Document Checklist</h4>
            </div>
            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Citizenship photocopy (नागरिकता)",
                "Two passport-size photos (२ फोटो)",
                "Loan application form",
                "Income verification documents",
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <FaCheck className="text-[color:var(--brand-green)] text-lg" />
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

{/* ================= CTA ================= */}
<section className="w-full py-20 text-center">
  <div className="mx-4 md:mx-10 bg-gradient-to-r from-[color:var(--brand-green)] via-emerald-800 to-[#f6a800] text-white rounded-3xl shadow-xl px-8 md:px-16 py-20">
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-3xl md:text-5xl font-bold mb-6"
    >
      Need Loan Assistance?
    </motion.h3>
    <p className="text-base md:text-lg opacity-90 mb-8">
      Our team is ready to guide you toward the best loan option.
    </p>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      href="#loan-form"
      className="inline-block px-16 py-5 rounded-full bg-black text-white text-base md:text-lg font-semibold shadow-lg"
    >
      Apply Now
    </motion.a>
  </div>
</section>







    </div>
  );
};

export default Loan;
