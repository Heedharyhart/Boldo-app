/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./connectSection.scss";
import ManImage from "../../styles/icons/coffee.svg";
import Chart from "../../styles/icons/chart.svg";
import LadyImage from "../../styles/icons/lady.svg";
import PieGraph from "../../styles/icons/pieGraph.svg";
import { Datas, Details } from "./index";
import Button from "../../atom/Button/button";

const ConnectSection = () => {
  return (
    <div className="connectSection">
      <div className="connectSection__wrapper">
        <div className="connectSection__ImgWrapper">
          <img
            className="connectImg"
            alt="Man Image"
            src={ManImage}
            title="A man on the phone"
          />
          <div className="connectSection__Chartwrapper">
            <img
              alt="chart Image"
              src={Chart}
              title="An image of graph chart"
            />
            <h4>30%</h4>
            <h6>More income in June</h6>
          </div>
        </div>
        <div className="connectSection__content">
          <h2 className="connectSection__content_header">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          {Datas.map((data) => (
            <div className="connectSection__content-list">
              <img alt="icon" src={data.img} />
              <span>{data.content}</span>
            </div>
          ))}
          <Button className="startNow-btn">Start Now</Button>
        </div>
      </div>
      <div className="connectSection__wrapper">
        <div className="connectSection__content">
          <h2 className="connectSection__content_header">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          {Details.map((data, index) => {
            const first = index === 0;
            return (
              <div className={!first ? "connectSection__content-list2" : "second_style"}>
                <img className="img-second" alt="icon" src={data.img} />
                <span>{data.content}</span>
              </div>
            );
          })}
        </div>
        <div className="connectSection__pieImgWrapper">
          <div>
            <img
              className="pieImg"
              alt="lady Image"
              src={LadyImage}
              title="A lady on the phone"
            />
            <div className="connectSection__pieWrapper">
              <img
                alt="pie chart Image"
                src={PieGraph}
                title="An image of pie chart"
              />
              <ul className="pie__list">
                <li className="list-item1">35% - Agile Development</li>
                <li className="list-item2">30% - Investor bandwidth</li>
                <li className="list-item3">35% - A/B testing </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
