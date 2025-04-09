import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";

const xaxis = window.clientX;
const yaxis = window.clientY;

console.log(xaxis, yaxis);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="antialiased">
        <div className=" absolute bg-red-500 w-5 h-5 z-[9999]">
          {xaxis}
          {yaxis}
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
