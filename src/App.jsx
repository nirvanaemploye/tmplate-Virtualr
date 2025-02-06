import { useEffect } from "react";
import Features from "./Componets/Featuresection/Features";
import Footer from "./Componets/Footer/Footer";
import Hero from "./Componets/Hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Pricing from "./Componets/Pricing/Pricing";
import Testimotions from "./Componets/Testimotions/Testimotions";
import Workflow from "./Componets/Workflow/Workflow";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  useEffect(() => {
    AOS.init(
      {
        duration:1000,
        offset:50,
      }
    );
  })
  return (
    <div className="bg-dark bg-black/90 overflow-y-hidden">
      <Navbar/>
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing/>
        <Testimotions/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
