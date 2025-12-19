import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section1 from "../components/Home/Section1/Section1";
import Section2 from "../components/Home/Section2/Section2";
import Section3 from "../components/Gacha/Section3";
import Section4 from "../components/Message/Section4";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Section1 />
            <Section2 onStart={() => setActiveTab("gacha")} />
          </>
        );
      case "gacha":
        return <Section3 trigger={activeTab} />;
      case "message":
        return <Section4 />;
      default:
        return null;
    }
  };

  return (
    <div style={{ paddingTop: "60px", paddingBottom: "40px" }}>
      <Header onTabClick={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
}
