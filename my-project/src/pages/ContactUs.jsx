import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaQuestionCircle,
} from "react-icons/fa";

import chinari from "../assets/chinari.jpg";

const faqs = [
  {
    question: "How can I open a savings account?",
    answer:
      "You can open a savings account by visiting our branch with valid ID proof and initial deposit. Our staff will guide you through the process.",
  },
  {
    question: "What types of loans are available?",
    answer:
      "We provide various loan options including personal, business, vehicle, and education loans tailored to member needs.",
  },
  {
    question: "How can I check my account balance?",
    answer:
      "You can check your account balance via our mobile app, online banking, or by visiting the branch.",
  },
  {
    question: "What are the membership benefits?",
    answer:
      "Members enjoy benefits such as higher interest rates on savings, access to affordable loans, and participation in cooperative programs.",
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname || !email || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    setStatus("Sending...");
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFullname("");
      setEmail("");
      setMessage("");
      setStatus("");
    }, 1500);
  };

  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center font-body">
        <img
          src={chinari}
          alt="Chitwan SACCO"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white"
        >
          {/* Breadcrumb */}
          <nav className="text-xs md:text-sm mb-3 font-body">
            <Link
              to="/"
              className="hover:text-[color:var(--brand-red)] transition"
            >
              Home
            </Link>{" "}
            <span className="mx-1">/</span>
            <span className="text-[color:var(--brand-red)] font-heading font-semibold">
              Contact Us
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 drop-shadow-lg">
            Contact Us
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-lg max-w-2xl font-body"
          >
            Reach out to Chitwan SACCO for any inquiries about savings, loans,
            or cooperative services. We are here to help our members.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="bg-gray-50 text-[#0F1F3D] py-16 px-4 sm:px-6 lg:px-12 font-body">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* CONTACT FORM */}
          <motion.div
            data-aos="fade-up"
            className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-[color:var(--brand-blue)]"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[color:var(--brand-blue)] mb-8">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold text-sm mb-2 font-body">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full bg-white border border-[color:var(--brand-blue)] focus:border-[color:var(--brand-green)] rounded-lg py-3 px-4 outline-none font-body"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-2 font-body">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[color:var(--brand-blue)] focus:border-[color:var(--brand-green)] rounded-lg py-3 px-4 outline-none font-body"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm mb-2 font-body">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[color:var(--brand-blue)] focus:border-[color:var(--brand-green)] rounded-lg py-3 px-4 outline-none resize-none font-body"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className={`w-full py-3 text-lg rounded-lg font-heading font-semibold text-white transition ${
                  status === "Sending..."
                    ? "bg-gray-400"
                    : "bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-red)]"
                }`}
              >
                {status === "Sending..." ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Contact Details */}
            <div className="mt-12 border-t pt-8 border-[color:var(--brand-blue)]">
              <h3 className="text-2xl font-heading font-bold text-[color:var(--brand-blue)] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-700 font-body">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[color:var(--brand-blue)]" />
                  <p>Head Office: Bharatpur-10, Syaulibazar</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[color:var(--brand-blue)]" />
                  <p>056-594580, 594581</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[color:var(--brand-blue)]" />
                  <p>info@vyccu.org.np</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6 text-2xl text-[color:var(--brand-blue)]">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--brand-red)]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--brand-red)]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:info@vyccu.org.np"
                  className="hover:text-[color:var(--brand-red)]"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-[color:var(--brand-blue)] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-[color:var(--brand-blue)] rounded-lg p-5 shadow-sm flex gap-4"
                >
                  <FaQuestionCircle className="text-[color:var(--brand-green)] text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-heading font-semibold">
                      {faq.question}
                    </h4>
                    <p className="text-gray-700 font-body">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 font-body">
        <div className="max-w-6xl mx-auto">
          <motion.div
            data-aos="fade-up"
            className="rounded-xl overflow-hidden shadow-xl border border-[color:var(--brand-blue)]"
          >
            <iframe
              title="Chitwan SACCO Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.83417510324404!2d84.4356872219554!3d27.675674277146566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1765022493194!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
};

export default ContactUs;