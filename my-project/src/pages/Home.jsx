// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaRegMoneyBillAlt,
  FaWallet,
  FaExchangeAlt,
  FaStar,
  FaPiggyBank,
  FaUsers,
  FaChartLine,
  FaUniversity,
  FaMobileAlt,
  FaCalculator,
} from "react-icons/fa";

import cover from "../assets/cover.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const heroSlides = [
  {
    image: cover,
    tag: "",
    title: "",
    description:
      "",
  },
  {
    image: photo1,
    tag: "जिल्ला तहको सहकारी नेतृत्व कार्यक्रम",
    title: "सशक्त नेतृत्व, पारदर्शी सहकारी सेवा",
    description:
      "सहकारी मूल्य र सिद्धान्तको आधारमा जिम्मेवार नेतृत्व निर्माण गर्दै सदस्यसेवामा निरन्तर सुधार।",
  },
  {
    image: photo2,
    tag: "संस्थाका ज्येष्ठ सदस्य सम्मान कार्यक्रम",
    title: "बुबाको मुख हेर्ने दिन, खुशी आँसीको शुभ अवसर",
    description:
      "आफ्ना ज्येष्ठ सदस्यप्रति सम्मान र कृतज्ञता व्यक्त गर्दै, दीर्घ योगदानको कदर।",
  },
  {
    image: photo3,
    tag: "ज्येष्ठ सदस्यहरुको विशेष सम्मान",
    title: "अनुभव, आशीर्वाद र सहकार्यको नयाँ अध्याय",
    description:
      "दशकौँदेखि निरन्तर साथ दिँदै आउनु भएका सदस्यहरूसँगको भावनात्मक भेट र सम्मान।",
  },
  {
    image: photo4,
    tag: "महिला तथा ज्येष्ठ सदस्य सम्मान तथा अन्तर्क्रिया",
    title: "सशक्त महिला, समृद्ध सहकारी",
    description:
      "महिला सदस्यको नेतृत्व, सहभागिता र आर्थिक सशक्तिकरणलाई जोड दिने विशेष कार्यक्रम।",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeIndex];

  return (
    <div className="bg-gray-50">
      {/* ============ HERO SECTION ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-4 pb-10 lg:pb-12">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.8fr_1fr]">
            {/* HERO SLIDER */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="h-[250px] w-full object-cover sm:h-[320px] md:h-[360px] lg:h-[420px]"
              />

              {/* brand gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-transparent" />

              {/* slide text */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="inline-block rounded-full bg-[color:var(--brand-green)]/85 px-3 py-[3px] text-[10px] font-semibold uppercase tracking-[0.22em] shadow-md">
                  {currentSlide.tag}
                </p>
                <h1 className="mt-3 text-lg font-bold md:text-2xl lg:text-3xl">
                  {currentSlide.title}
                </h1>
                <p className="mt-2 max-w-xl text-[12px] md:text-[13px] text-white/90">
                  {currentSlide.description}
                </p>
              </div>

              {/* slider controls */}
              <div className="absolute left-0 right-0 bottom-2 flex items-center justify-between px-5 text-[10px] text-white/80">
                <span>
                  {activeIndex + 1} / {heroSlides.length}
                </span>
                <div className="flex gap-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === activeIndex
                          ? "w-6 bg-[color:var(--brand-green)]"
                          : "w-2.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Hero right content */}
            <div className="flex flex-col justify-between gap-4">
              {/* Highlight card */}
              <div className="rounded-xl bg-gradient-to-r from-[color:var(--brand-green)] via-emerald-700 to-[#f6a800] px-5 py-4 text-white shadow-lg">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/80">
                  Online Services
                </p>
                <p className="mt-2 text-sm font-semibold md:text-base">
                  ई-बैंकिङ्ग, मोबाइल बैंकिङ्ग, QR Payment एकै प्लेटफर्ममा
                </p>
                <p className="mt-1 text-[12px] text-white/90">
                  आधुनिक डिजिटल प्रविधि मार्फत सहकारी सेवालाई अझ सहज र
                  छरितो बनाउँदै।
                </p>
                <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-green)] hover:bg-[color:var(--brand-red)] hover:text-white
">Get Started <FaArrowRight className="text-[12px]" />
                </button>
              </div>

              {/* Quick buttons */}
              <div className="grid grid-cols-2 gap-3 text-[11px] md:text-xs">
                {[
                  { label: "365 Banking Service", icon: <FaWallet /> },
                  { label: "SMS Banking", icon: <FaMobileAlt /> },
                  { label: "Make Payments", icon: <FaExchangeAlt /> },
                  { label: "Online Banking", icon: <FaRegMoneyBillAlt /> },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/95 px-3 py-2.5 text-left shadow-sm transition hover:-translate-y-[2px] hover:border-[color:var(--brand-green)] hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                      {/* bigger icon */}
                      <span className="text-[16px]">{item.icon}</span>
                    </span>
                    <span className="text-[11px] font-semibold leading-snug">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS & SERVICES STRIPE ============ */}
      <section className="relative overflow-hidden py-10 md:py-14">
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-green)] via-emerald-800 to-[#f6a800]" />
        <div className="absolute -left-10 top-0 h-full w-24 bg-[#f6a800]/70 skew-x-[14deg]" />
        <div className="absolute -right-10 bottom-0 h-full w-24 bg-[#f6a800]/70 -skew-x-[14deg]" />

        <div className="relative mx-auto max-w-6xl px-4 text-white">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_2fr]">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Presenting products and services that are right for you
              </h2>
              <p className="mt-3 text-[12px] md:text-[13px] text-white/90">
                स्थिर बचत, सहुलियतपूर्ण ऋण र विश्वसनीय सेवा प्रणाली मार्फत
                सदस्यहरूको आर्थिक सुरक्षा र समृद्ध भविष्य निर्माण गर्न हामी
                साथमा छौं।
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Deposit",
                  text: "विविध योजनामा बचत खाता, आवधिक बचत, बाल बचत र स्थायी निक्षेप।",
                  icon: <FaPiggyBank />,
                },
                {
                  title: "Loans",
                  text: "कृषि, व्यवसाय, शिक्षा, आवास लगायत आवश्यकताअनुसार सहुलियतपूर्ण ऋण सुविधा।",
                  icon: <FaRegMoneyBillAlt />,
                },
                {
                  title: "Remittance",
                  text: "देशभित्र र विदेशबाट आएको रकम सुरक्षित र छरितो रूपमा खातामा।",
                  icon: <FaExchangeAlt />,
                },
                {
                  title: "Other Services",
                  text: "बीमा, परामर्श, सदस्य प्रशिक्षण तथा डिजिटल सहकारी सेवाहरू।",
                  icon: <FaStar />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 rounded-xl bg-white/8 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18 text-white">
                      <span className="text-[17px]">{item.icon}</span>
                    </span>
                    <p className="text-[13px] font-semibold">{item.title}</p>
                  </div>
                  <p className="text-[11px] leading-relaxed text-white/90">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ONLINE ACCOUNT OPENING ============ */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1.3fr]">
            <div className="overflow-hidden rounded-xl shadow-md">
              <div className="h-[220px] w-full bg-[color:var(--brand-green)]/10">
                <img
                  src={photo2}
                  alt="Online account opening"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Online Account Opening
              </h2>
              <p className="mt-3 text-[12px] md:text-[13px] text-gray-600">
                सहकारी कार्यालयसम्म आउन नसक्ने सदस्यका लागि सजिलो विकल्प,
                अब प्राविधिक सहयोगका साथ घरमै बसेर खाता खोल्न सकिन्छ।
              </p>
              <ul className="mt-3 space-y-1 text-[12px] text-gray-700">
                <li>• सरल अनलाइन फारम र सहज प्रक्रिया</li>
                <li>• सुरक्षित डकुमेन्ट अपलोड सुविधा</li>
                <li>• सदस्यता स्वीकृतिको प्रगति अवस्थाको जानकारी</li>
              </ul>
              <button className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[color:var(--brand-green)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[color:var(--brand-red)] hover:text-white">
                Get Started
                <FaArrowRight className="text-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACCOUNTS SECTION ============ */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold md:text-2xl">Accounts</h2>
          <p className="mt-2 text-[12px] md:text-[13px] text-gray-600">
            तपाईंको आवश्यकता अनुसार विभिन्न बचत योजना।
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Monthly Saving",
                points: [
                  "न्यूनतम मासिक जम्मा रकमबाट सुरु।",
                  "चक्रवृद्धि ब्याज सुविधा।",
                ],
              },
              {
                title: "Daily Saving",
                points: [
                  "दैनिक व्यवसायिक आम्दानी सुरक्षित बचत।",
                  "स्वेच्छाले जम्मा गर्ने सुविधा।",
                ],
              },
              {
                title: "Nari Saving",
                points: [
                  "महिलाहरूका लागि लक्षित विशेष योजना।",
                  "साना उद्यम र स्वरोजगारमा सहयोग।",
                ],
              },
              {
                title: "Optional Saving",
                points: [
                  "लचिलो जम्मा र निकाल्ने सुविधा।",
                  "दिगो वित्तीय योजना बनाउन सहयोगी।",
                ],
              },
            ].map((acc) => (
              <div
                key={acc.title}
                className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 text-[12px] shadow-sm transition hover:-translate-y-[2px] hover:shadow-md"
              >
                <p className="text-[13px] font-semibold text-[color:var(--brand-green)]">
                  {acc.title}
                </p>
                <ul className="space-y-1 text-gray-700">
                  {acc.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSTITUTIONAL PROFILE + LOANS / EMI ============ */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {/* Profile stats */}
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Institutional Profile
            </h2>
            <div className="mt-5 grid gap-4 text-[11px] md:text-xs sm:grid-cols-3 md:grid-cols-6">
              {[
                { label: "Capital", value: "916,841,412", icon: <FaUniversity /> },
                { label: "Assets", value: "10,479,789,303", icon: <FaChartLine /> },
                { label: "Deposit", value: "8,288,975,756", icon: <FaPiggyBank /> },
                { label: "Members", value: "127,373", icon: <FaUsers /> },
                { label: "Reserve Fund", value: "794,330,077", icon: <FaStar /> },
                { label: "Branches", value: "15+", icon: <FaWallet /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-1 rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                    <span className="text-[16px]">{item.icon}</span>
                  </span>
                  <p className="text-[11px] font-semibold text-gray-600">
                    {item.label}
                  </p>
                  <p className="text-[12px] font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Loans + EMI */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1.3fr]">
            {/* Loans grid */}
            <div>
              <h3 className="text-lg font-semibold md:text-xl">Loans</h3>
              <p className="mt-2 text-[12px] md:text-[13px] text-gray-600">
                सदस्यको आवश्यकता अनुसार लचिलो र योजना मिलाएर विभिन्न प्रकारका
                ऋण सुविधा उपलब्ध छन्।
              </p>

              <div className="mt-4 grid gap-3 text-[12px] sm:grid-cols-2">
                {[
                  "Agriculture Loan",
                  "Business Loan",
                  "Education Loan",
                  "Home Loan",
                  "Industry Loan",
                  "Emergency Loan",
                ].map((loan) => (
                  <div
                    key={loan}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm transition hover:border-[color:var(--brand-green)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                      <FaRegMoneyBillAlt className="text-[15px]" />
                    </span>
                    <span>{loan}</span>
                  </div>
                ))}
              </div>

              <button className="mt-4 rounded-sm bg-[color:var(--brand-green)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-emerald-700">
                Read More
              </button>
            </div>

            {/* EMI calculator placeholder */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <FaCalculator className="text-[color:var(--brand-green)] text-[18px]" />
                <h3 className="text-lg font-semibold">EMI Calculator</h3>
              </div>
              <p className="mb-3 text-[12px] text-gray-600">
                नमूना गणना हेर्न तल विवरण भर्नुहोस्। (यसलाई पछि वास्तविक
                कार्यात्मक क्याल्कुलेटरमा विस्तार गर्न सकिन्छ।)
              </p>

              <div className="grid gap-3 text-[12px] md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] text-gray-600">
                    Loan Type
                  </label>
                  <select className="w-full rounded border border-gray-300 bg-white px-2 py-1.5 text-[12px] outline-none focus:border-[color:var(--brand-green)]">
                    <option>Select Loan Type</option>
                    <option>Home Loan</option>
                    <option>Education Loan</option>
                    <option>Business Loan</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-gray-600">
                    Loan Amount (NPR)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded border border-gray-300 px-2 py-1.5 text-[12px] outline-none focus:border-[color:var(--brand-green)]"
                    placeholder="500000"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-gray-600">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded border border-gray-300 px-2 py-1.5 text-[12px] outline-none focus:border-[color:var(--brand-green)]"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-gray-600">
                    Duration (in months)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded border border-gray-300 px-2 py-1.5 text-[12px] outline-none focus:border-[color:var(--brand-green)]"
                    placeholder="60"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-md bg-white p-3 text-[12px]">
                <p className="text-[11px] font-semibold text-gray-600">
                  RESULT
                </p>
                <p className="mt-1 text-[13px] font-bold text-[color:var(--brand-green)]">
                  Monthly Payment (EMI): NPR 00,000.00
                </p>
                <p className="mt-1 text-[11px] text-gray-500">
                  *यसले केवल नमूना परिणाम देखाउँछ। वास्तविक रकम सहमत
                  शर्तअनुसार फरक हुन सक्छ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REMITTANCE + E-BANKING ============ */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {/* Remittance */}
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1.3fr]">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">Remittance</h2>
              <p className="mt-2 text-[12px] md:text-[13px] text-gray-600">
                विदेशमा पसिनाको कमाइ गर्ने सदस्य र परिवारको माया जोड्ने सुरक्षित
                माध्यम, विश्वसनीय र भरपर्दो रेमिट सेवा।
              </p>
              <button className="mt-4 rounded-sm bg-[color:var(--brand-green)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-emerald-700">
                Read More
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Put remittance partner logos here */}
              <div className="h-12 w-28 rounded-md bg-white shadow-sm" />
              <div className="h-12 w-28 rounded-md bg-white shadow-sm" />
              <div className="h-12 w-28 rounded-md bg-white shadow-sm" />
              <div className="h-12 w-28 rounded-md bg-white shadow-sm" />
            </div>
          </div>

          {/* E-Banking & Mobile Banking */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl bg-[color:var(--brand-green)]/90 p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold">E-Banking Service</h3>
              <p className="mt-2 text-[12px] md:text-[13px] text-white/90">
                अनलाइन ट्रान्सफर, बिल भुक्तानी, स्टेटमेन्ट हेर्ने सुविधा र अन्य
                डिजिटल बैंकिङ्ग सेवाहरू छिटो, भरपर्दो र सुरक्षित
                प्लेटफर्ममार्फत।
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-green)] hover:bg-gray-100">
                Coming Soon <FaArrowRight className="text-[11px]" />
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <FaMobileAlt className="text-[color:var(--brand-green)] text-[18px]" />
                <h3 className="text-lg font-semibold">Mobile Banking</h3>
              </div>
              <p className="mt-2 text-[12px] md:text-[13px] text-gray-600">
                आफ्नो मोबाइलबाटै साना ठूला सबै कारोबार, खाता विवरण र भुक्तानी
                सेवाहरू सञ्चालन गर्न सकिने अत्याधुनिक मोबाइल एप।
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black/90 text-[10px] text-white">
                  App Store
                </div>
                <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black/90 text-[10px] text-white">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEWS & NOTICES ============ */}
      <section className="bg-white pb-12 pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* News */}
            <div>
              <h3 className="text-lg font-semibold">News</h3>
              <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 text-[12px]">
                {[
                  "३६ औं साधारण सभाको सफल समापन",
                  "डिजिटल सहकारी सेवा विस्तार कार्यक्रम",
                  "महिला उद्यमशीलता प्रवर्द्धन गोष्ठी",
                ].map((news, idx) => (
                  <div
                    key={news}
                    className={`flex items-center justify-between px-3 py-2 ${
                      idx !== 2 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <span>{news}</span>
                    <span className="text-[10px] text-gray-500">
                      2025-01-01
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-3 rounded-sm bg-[color:var(--brand-green)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-emerald-700">
                View All
              </button>
            </div>

            {/* Notices */}
            <div>
              <h3 className="text-lg font-semibold">Notices</h3>
              <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 text-[12px]">
                {[
                  "सदस्यता नवीकरण सम्बन्धि सूचना",
                  "नयाँ सेवा समयसूची लागू सम्बन्धि जानकारी",
                  "परीक्षित वार्षिक लेखापरीक्षण प्रतिवेदन उपलब्ध",
                ].map((notice, idx) => (
                  <div
                    key={notice}
                    className={`flex items-center justify-between px-3 py-2 ${
                      idx !== 2 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <span>{notice}</span>
                    <span className="text-[10px] text-gray-500">
                      2025-01-05
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-3 rounded-sm bg-[color:var(--brand-green)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-emerald-700">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
