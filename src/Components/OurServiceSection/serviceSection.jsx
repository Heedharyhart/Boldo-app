import React from 'react';
import './serviceSection.scss';
import ShowcaseCard from '../../atom/showcaseCard/showcaseCard';

const ServiceSection = () => {
  return (
    <div className="serviceSection">
      <div className="serviceSection__wrapper">
        <h6 className="serviceSection__title">Our Services</h6>
        <h2 className="serviceSection__content">Handshake infographic mass market <span>crowdfunding iteration.</span></h2>
      </div>
      <div>
        <ShowcaseCard />
      </div>
    </div>
  )
}

export default ServiceSection