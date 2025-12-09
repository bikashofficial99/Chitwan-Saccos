// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import NoticeTicker from "./components/NoticeTicker";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import Loader from "./components/Loader";
import PopupNotice from "./components/PopupNotice";

// Pages
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import Remittance from "./pages/Remittance";
import Insurance from "./pages/Insurance";
import Deposit from "./pages/Deposit";
import Report from "./pages/Report";
import ContactUs from "./pages/ContactUs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show loader for a short time
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Show popup just after loader disappears
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">

      {/* FULLSCREEN LOADER */}
      {isLoading && <Loader />}

      {/* MAIN WEBSITE (hidden until loader ends) */}
      {!isLoading && (
        <Router>
          <ScrollToTop />
          <Navbar />
          <NoticeTicker />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/remittance" element={<Remittance />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/report" element={<Report />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>

          <Footer />
          <ScrollButton />

          {/* POPUP NOTICE SLIDER */}
          <PopupNotice open={showPopup} onClose={() => setShowPopup(false)} />
        </Router>
      )}
    </div>
  );
}

export default App;
