import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import KeyBenefits from "./pages/KeyBenefits";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SuccessStories from "./pages/SuccessStories";
import Action from "./pages/Action";
import Features from "./pages/Features";
import Registration from "./pages/Registration";
import Events from "./pages/Events";
import FAQs from "./pages/FAQs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/key-benefits" element={<KeyBenefits />} />
        <Route path="/action" element={<Action />} />
        <Route path="/features" element={<Features />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
