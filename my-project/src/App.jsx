import React from "react";
import Navbar from "./components/Navbar";
import NoticeTicker from "./components/NoticeTicker";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <NoticeTicker />

      <main className="mx-auto max-w-6xl px-4 py-8">
        
      </main>
    </div>
  );
}

export default App;
