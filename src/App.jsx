import React from "react";
// import { Routes, Route } from "react-router-dom";
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
    
       <Home />
       <SuccessStories />
       <KeyBenefits />
     <Action />
      <Features />
     <Registration />
        <Events />
        <FAQs />
      <AboutUs />
       <Blog />
     <Partners />

    
      <Footer />
    </>
  );
}

export default App;
