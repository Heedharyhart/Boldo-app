import React from 'react';
import "./iconSection.scss";
import presLogo from "../../styles/icons/pres.svg";
import boldoLogo from "../../styles/icons/boldo.svg";
import prestoLogo from "../../styles/icons/presto.svg";

const IconSection = () => {
  return (
    <div className="icon__section">
      <img alt="pres logo" src={boldoLogo} />
      <img alt="pres logo" src={prestoLogo} />
      <img alt="pres logo" src={boldoLogo} />
      <img alt="pres logo" src={prestoLogo} />
      <img alt="pres logo" src={boldoLogo} />
      <img alt="pres logo" src={presLogo} />
         
    </div>
  )
}

export default IconSection