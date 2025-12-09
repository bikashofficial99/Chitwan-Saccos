import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import {
  FaFileAlt,
  FaHandshake,
  FaBriefcase,
  FaHeart,
  FaHome,
  FaClipboardList,
  FaRegClock,
  FaUserShield,
  FaPlaneDeparture,
  FaChevronRight,
  FaFolderOpen,
  FaCheck,
  FaPiggyBank,
  FaCoins,
  FaWallet,
} from "react-icons/fa";

// Hero image import
import heroImage from "../assets/chinari.jpg";

const Deposit = () => {
  const [flipped, setFlipped] = useState(null);
  const [hovered, setHovered] = useState(null);

  const depositTypes = [
    {
      title: "Fixed Deposit",
      icon: <FaPiggyBank />,
      border: "var(--brand-red)",
      points: [
        "Guaranteed returns on investment",
        "Flexible tenures from 6 months to 5 years",
        "High interest rates for long-term deposits",
      ],
    },
    {
      title: "Recurring Deposit",
      icon: <FaCoins />,
      border: "var(--brand-green)",
      points: [
        "Systematic monthly savings",
        "Attractive interest rates",
        "Flexible maturity options",
      ],
    },
    {
      title: "Savings Deposit",
      icon: <FaWallet />,
      border: "var(--brand-blue)",
      points: [
        "Easy access to funds",
        "Earn interest on balance",
        "Secure and flexible account options",
      ],
    },
    {
      title: "Senior Citizen Deposit",
      icon: <FaUserShield />,
      border: "var(--brand-red)",
      points: [
        "Higher interest rates for senior citizens",
        "Flexible tenure options",
        "Safe and secure savings plan",
      ],
    },
  ];

  const isFlipped = (index) => flipped === index || hovered === index;

  // Counter section inView detection
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[500px] md:h-[650px] rounded-b-[150px] md:rounded-b-[200px] overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <div className="text-sm mb-6 opacity-80">
            <span className="cursor-pointer hover:opacity-100">Home</span> /{" "}
            <span className="opacity-100 font-semibold">Deposit Services</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            Deposit Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-5 text-sm md:text-lg opacity-90 max-w-2xl mx-auto"
          >
            Secure your savings with flexible deposit schemes designed to maximize your returns.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-25 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-10 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)]">
            Our Deposit Solutions
          </h2>
          <p className="text-gray-700 leading-7 text-sm md:text-base max-w-3xl">
            We offer a variety of deposit options including fixed, recurring, and savings deposits to suit your financial goals. Safe, secure, and convenient banking at your fingertips.
          </p>
        </div>
      </section>

      {/* ================= COUNTER SECTION ================= */}
      <section ref={counterRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { title: "Deposits Made", count: 1800, color: "var(--brand-red)" },
            { title: "Happy Members", count: 1200, color: "var(--brand-green)" },
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

      {/* ================= DEPOSIT TYPES FLIP CARDS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg md:text-3xl font-semibold text-[color:var(--brand-green)] mb-10 text-center">
            Available Deposit Plans
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {depositTypes.map((item, index) => {
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

              const backStyle = {
                ...faceStyle,
                transform: "rotateY(180deg)",
                textAlign: "center",
              };

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
                      <div className="text-[color:var(--brand-blue)] text-6xl mb-4">{item.icon}</div>
                      <h4 className="font-semibold text-lg text-[color:var(--brand-blue)]">{item.title}</h4>
                    </div>

                    <div style={backStyle}>
                      <ul className="text-gray-700 text-sm space-y-2 text-left">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-[color:var(--brand-blue)] mt-1">•</span>
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

      {/* ================= DEPOSIT APPLICATION PROCESS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)] mb-12 text-center">
            Deposit Application Process
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[color:var(--brand-blue)] opacity-10 rounded-full"></div>

            <div className="grid md:grid-cols-4 gap-10">
              {[ 
                { title: "Open Account", icon: <FaClipboardList />, color: "var(--brand-blue)" },
                { title: "Document Verification", icon: <FaFileAlt />, color: "var(--brand-green)" },
                { title: "Approval Decision", icon: <FaRegClock />, color: "var(--brand-red)" },
                { title: "Deposit Activation", icon: <FaHandshake />, color: "var(--brand-blue)" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  className="bg-gray-50 p-7 rounded-xl shadow-md border border-gray-200 relative"
                >
                  <div className="text-4xl mx-auto mb-4" style={{ color: step.color }}>
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-base text-gray-700 text-center">{step.title}</h4>
                  {i < 3 && (
                    <FaChevronRight className="hidden md:block absolute right-[-18px] top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= REQUIRED DOCUMENTS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)] mb-10 text-center">
            Required Documents
          </h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white shadow-xl rounded-xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaFolderOpen className="text-[color:var(--brand-blue)] text-3xl" />
              <h4 className="text-lg font-semibold text-gray-800">Document Checklist</h4>
            </div>

            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Deposit application form",
                "ID proof (Citizenship/Passport)",
                "Address proof",
                "Initial deposit amount",
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

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[color:var(--brand-blue)] text-white text-center rounded-t-[70px] md:rounded-t-[140px]">
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl md:text-3xl font-bold">
          Need Deposit Assistance?
        </motion.h3>

        <p className="text-sm md:text-base mt-2 opacity-90">
          Our team is ready to guide you toward the best deposit plan.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          href="#deposit-form"
          className="inline-block mt-6 px-10 py-3 rounded-full bg-[color:var(--brand-red)] text-white text-sm font-semibold shadow-lg"
        >
          Open Deposit
        </motion.a>
      </section>
    </div>
  );
};

export default Deposit;