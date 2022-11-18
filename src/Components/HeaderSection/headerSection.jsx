import React from 'react';
import './headerSection.scss';
import NavBar from '../../atom/NavBar/navBar';
import NavSection from '../../atom/NavSection/navSection';
import IconSection from '../../atom/IconSection/iconSection';


const HeaderSection = () => {
  return (
    <div className="header">
      <NavBar/>
      <NavSection />
      <IconSection />
    </div>
  )
}

export default HeaderSection;