import React from "react";
import "./customerSection.scss";
import OfficeSpace from "../../styles/icons/men-comp.svg";
import { CustomerData } from ".";

const CustomerSection = () => {
  return (
    <div className="customerSection">
      <div>
        <img
          alt="office space"
          src={OfficeSpace}
          title="image of an office space"
        />
      </div>
      <div className="customerSection__contentCard">
        <h2>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>

        
          <div >
          {CustomerData.map((data) => (
            <div className="customerSection__accodions">
              <h5>{data.content}</h5>
              <span>
                <img alt="chevron-icon" src={data.img} />
              </span>
            </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default CustomerSection;
