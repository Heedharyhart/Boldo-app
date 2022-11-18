import React from "react";
import logo from "../../styles/icons/Logo.svg";
import "./navBar.scss";


const NavBar = () => {
  return (
    <div className="navigation">
      <div className="nav__wrapper">
        <div className="nav__wraper_imgDiv">
          <img alt="logo" src={logo} title="Boldo-app logo" />
        </div>
        <div className="nav__wrapper_content">
          <ul className="nav__list">
            <li className="nav__list_item">
              <a href="/product">Product</a>
            </li>
            <li className="nav__list_item">
              <a href="/service">Services</a>
            </li>
            <li className="nav__list_item">
              <a href="/about">About</a>
            </li>
            <li className="nav__list_item">
              <a className="login" href="/login">
                log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
