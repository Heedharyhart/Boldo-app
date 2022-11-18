import React from "react";
import "./showcaseCard.scss";
import Datas from "./data";

const ShowcaseCard = () => {
  return (
    <div className="showcaseCard">
      {Datas.map((data) => (
        <div className="showcaseCard__wrapper">
          <img alt="card-img" src={data.img} />
          <h5 className="showcaseCard__heading">{data.title}</h5>
          <h6 className="showcaseCard__content">{data.content}</h6>
          <div className="showcaseCard__explore" >
            <span>Explore page</span>
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14H19"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 7L19 14L12 21"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseCard;
