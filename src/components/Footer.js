import React from "react";
//Styling
import "../Home.css";

const Footer = () => {
  return (
    <div>
      <div style={{ padding: "5rem 20rem 2rem 20rem" }}>
        <div
          className="line"
          style={{ height: "0.1rem", background: "#ABABAB" }}
        />
        <div
          className="links"
          class="d-flex justify-content-evenly"
          style={{ marginTop: "3rem", color: "#ABABAB" }}
        >
          <a href="#we" style={{ textDecoration: "none", color: "#ABABAB" }}>
            <h6>Who are we?</h6>
          </a>
          <a href="#smart" style={{ textDecoration: "none", color: "#ABABAB" }}>
            <h6>Smart Cities</h6>
          </a>
          <a
            href="#mission"
            style={{ textDecoration: "none", color: "#ABABAB" }}
          >
            <h6>A nossa missão</h6>
          </a>
        </div>
      </div>
      <div
        class="d-flex justify-content-center"
        style={{ paddingBottom: "1rem", color: "#d1d1d1" }}
      >
        All Rights Reserved 2020
      </div>
    </div>
  );
};

export default Footer;
