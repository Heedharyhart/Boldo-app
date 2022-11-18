import React from "react";
import Button from "../Button/button";
import "./templateSection.scss"

const TemplateSection = () => {
  return (
    <div className="templateSection">
      <div className="templateSection__heading">
        <h2>An enterprise template to ramp<span> <br/>up your company website</span></h2>
      </div>
      <div className="templateSection__btn">
        <input type="email" placeholder="Your email address" />
        <Button>Start Now</Button>
      </div>
    </div>
  );
};

export default TemplateSection;
