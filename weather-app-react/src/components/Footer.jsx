import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className="footer__main">
      <div className="footer__components">

        <div className="footer__logo__left">
          <h1 style={{fontFamily:"fantasy", fontWeight:"lighter"}}>WEATHERAPP</h1>
        </div>

        <div className="footer__component__right">
          <ul
            className="footer__right__listone"
            style={{ listStyleType: "none" }}
          >
            <li>Home</li>
            <li>Cities</li>
            <li>News</li>
          </ul>
          <ul
            className="footer__right__listtwo"
            style={{ listStyleType: "none" }}
          >
            <li>Contact us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
