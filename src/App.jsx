import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Screens/Home";
import Blog from "./Screens/Blog";
import FooterSection from "./Components/Footer";
import Navbars from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <FooterSection />
    </div>
  );
};

export default App;
