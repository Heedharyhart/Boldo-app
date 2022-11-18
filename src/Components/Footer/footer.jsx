import React from "react";
import FooterLogo from "../../styles/icons/footerLogo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img alt="footer-logo" src={FooterLogo} />
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <span>All rights reserved.</span>
        </div>
        <div className="footer__landing">
          <ul>
            <li>Landings</li>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer__company">
          <ul>
            <li>Company</li>
            <li>Home</li>
            <li>Careers</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer__company">
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
