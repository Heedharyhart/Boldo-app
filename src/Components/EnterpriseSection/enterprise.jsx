import React from "react";
import "./enterpriseSection.scss";
import Albus from "../../styles/icons/albus.svg";
import Severe from "../../styles/icons/severe.svg";
import Harry from "../../styles/icons/harry.svg";
const EnterpriseSection = () => {
  return (
    <div className="enterpriseSection">
      <div className="enterpriseSection__heading">
        <h2>
          An enterprise template to ramp <br /> up your company website
        </h2>
        <div className="arrows">
          <span className="arrow-left">
            <svg
              width="36"
              height="39"
              viewBox="0 0 36 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5 18L7.5 18"
                stroke="#0A2640"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 28.5L7.5 18L18 7.5"
                stroke="#0A2640"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="arrow-right">
            <svg
              width="36"
              height="39"
              viewBox="0 0 36 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 21H28.5"
                stroke="#0A2640"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 10.5L28.5 21L18 31.5"
                stroke="#0A2640"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="enterpriseSection__avatar">
        <div className="enterpriseSection__avatar_albus avatars">
          <h4>
            “Buyer buzz partner network disruptive non-disclosure agreement
            business”
          </h4>
          <div className="avatar severe-avatar">
            <img alt="albus-avatar" src={Albus} />
            <div>
              <h5>Albus Dumbledore</h5>
              <h6>Manager @ Howarts</h6>
            </div>
          </div>
        </div>
        <div className="enterpriseSection__avatar_severe avatars">
          <h4>
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </h4>
          <div className="avatar severe-avatar">
            <img alt="severe-avatar" src={Severe} />
            <div>
              <h5>Severus Snape</h5>
              <h6>Manager @ Slytherin</h6>
            </div>
          </div>
        </div>
        <div className="enterpriseSection__avatar_harry avatars">
          <h4>
          “Release facebook responsive web design business model canvas seed money monetization.”
          </h4>
          <div className="avatar harry-avatar">
            <img alt="harry-avatar" src={Harry} />
            <div>
              <h5>Harry Potter</h5>
              <h6>Team Leader @ Gryffindor</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSection;
