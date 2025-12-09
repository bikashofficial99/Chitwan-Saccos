import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// Hero image import
import heroImage from "../assets/chinari.jpg";
import logo from "../assets/logo.png";

const reports = [
  { year: "२०७५/७६", file: "/reports/report_2075.pdf" },
  { year: "२०७६/७७", file: "/reports/report_2076.pdf" },
  { year: "२०७७/७८", file: "/reports/report_2077.pdf" },
  { year: "२०७८/७९", file: "/reports/report_2078.pdf" },
  { year: "२०७९/८०", file: "/reports/report_2079.pdf" },
  { year: "२०८०/८१", file: "/reports/report_2080.pdf" },
  { year: "२०८१/८२", file: "/reports/report_2081.pdf" },
  { year: "२०८२/८३", file: "/reports/report_2082.pdf" },
  { year: "२०८३/८४", file: "/reports/report_2083.pdf" },
  { year: "२०८४/८५", file: "/reports/report_2084.pdf" },
];

// ================= COUNTER COMPONENT =================
const Counter = ({ target, suffix = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);

  // Start counting when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCounting) {
            setIsCounting(true);
          }
          if (!entry.isIntersecting) {
            setIsCounting(false);
            setCount(0); // reset every time user scrolls away
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isCounting]);

  // Animation logic
  useEffect(() => {
    if (isCounting) {
      let start = 0;
      const end = target;
      const duration = 1800; // ms
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [isCounting, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("np")} {suffix}
    </span>
  );
};

const Report = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[400px] md:h-[500px] rounded-b-[150px] md:rounded-b-[200px] overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <div className="text-sm mb-6 opacity-80">
            <span className="cursor-pointer hover:opacity-100">Home</span> /{" "}
            <span className="opacity-100 font-semibold">Reports</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            Annual Reports
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-4 text-sm md:text-lg opacity-90 max-w-2xl mx-auto"
          >
            Access our past 10 years’ annual reports. Click the button below to download PDF files for each year.
          </motion.p>
        </div>
      </section>

      {/* ================= REPORTS GRID ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)] mb-10 text-center">
            Reports by Year
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 flex flex-col items-center text-center transition-all"
                whileHover={{
                  y: -5,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
                  background: "linear-gradient(145deg, #f9fafb, #e6f0ea)",
                }}
              >
                <img src={logo} alt="Chitwan SACCO" className="w-16 h-16 mb-4" />
                <h3 className="font-semibold text-lg mb-4">
                  {report.year} रिपोर्ट
                </h3>
                <motion.a
                  href={report.file}
                  download
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 mt-auto text-white bg-[color:var(--brand-green)] px-4 py-2 rounded-full text-sm font-semibold transition-all"
                >
                  <FaDownload /> Download PDF
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY HIGHLIGHTS WITH COUNTER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)] mb-12">
            Key Highlights
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-4xl font-bold text-[color:var(--brand-green)] mb-3">
                <Counter target={25000} suffix="+" />
              </h3>
              <p className="text-gray-600 font-semibold">Active Members</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-3">
                <Counter target={15} suffix="%" />
              </h3>
              <p className="text-gray-600 font-semibold">Annual Growth</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-4xl font-bold text-[color:var(--brand-red)] mb-3">
                <Counter target={98} suffix="%" />
              </h3>
              <p className="text-gray-600 font-semibold">Member Satisfaction</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL REPORT INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-3xl font-bold text-[color:var(--brand-blue)] mb-6">
            About Our Reports
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            Our annual reports provide a detailed overview of Chitwan SACCO's financial performance, key achievements, and strategic initiatives.
            They are prepared according to Nepal Government regulations and provide transparency to our members and stakeholders.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-[color:var(--brand-blue)] text-white text-center rounded-t-[70px] md:rounded-t-[140px]">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl md:text-3xl font-bold"
        >
          Want More Information?
        </motion.h3>
        <p className="mt-2 text-sm md:text-base opacity-90">
          Contact our team for queries regarding reports and annual performance.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-block mt-6 px-10 py-3 rounded-full bg-[color:var(--brand-red)] text-white text-sm font-semibold shadow-lg"
        >
          Contact Us
        </motion.a>
      </section>

    </div>
  );
};

export default Report;