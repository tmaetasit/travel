import React from "react";
import "./Home.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SwitSection from "../../Components/SwitSection/SwitSection";
import FranceSection from "../../Components/FranceSection/FranceSection";
import JapanSection from "../../Components/JapanSection/JapanSection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <SwitSection />
      <FranceSection />
      <JapanSection />
      

      <div className="my-4 my-sm-5">
        <RecommendedSection itemReccomendedTitle="Recommended for you" />
      </div>
    </div>
  );
}

export default Home;
