import React from 'react';
import "./navSection.scss";
import chart from "../../styles/icons/hero graphics.svg";
import Button from '../Button/button';

const NavSection = () => {
  return (
    <div>
      <section className="showcase">
        <div className="showcase__wrapper">
          <div className="showcase__wrapper_content">
            <h2 className="showcase__wrapper_header">Save time by building fast with Boldo Template</h2>
            <h6 className="showcase__wrapper_text">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </h6>
            <Button className="template_btn">Buy template </Button>
            <Button className="explore_btn">Buy template </Button>
          </div>
          <div className="showcase__img">
            <img
              alt="hero graphic chart"
              src={chart}
              title="hero graphic chart img"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavSection;