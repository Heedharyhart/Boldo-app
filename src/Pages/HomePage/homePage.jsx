import React from "react";
import ConnectSection from "../../Components/ConnectSection/connectSection";
import EnterpriseSection from "../../Components/EnterpriseSection/enterprise";
import Footer from "../../Components/Footer/footer";
import HeaderSection from "../../Components/HeaderSection/headerSection";
import MainSection from "../../Components/MainSection/mainSection";
import ServiceSection from "../../Components/OurServiceSection/serviceSection";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeaderSection />
      <ServiceSection />
      <ConnectSection />
      <div className="enterprise">
        <EnterpriseSection />
      </div>
      <MainSection />
      <Footer />
    </div>
  );
};

export default HomePage;
