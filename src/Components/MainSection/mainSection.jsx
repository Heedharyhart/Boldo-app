import React from 'react';
import './mainSection.scss';
import BlogSection from '../../atom/BlogSection/blogSection';
import CustomerSection from '../../atom/CustomerSection/customerSection';
import TemplateSection from '../../atom/TemplateSection/templateSection';

const MainSection = () => {
  return (
    <div className="mainSection">
      <CustomerSection />
      <BlogSection />
      <TemplateSection />
 </div>
  )
}

export default MainSection;