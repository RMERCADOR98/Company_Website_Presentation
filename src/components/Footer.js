import React from "react";

const Footer = () => {
  return (
    <div style={{ padding: "5rem 20rem 5rem 20rem" }}>
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
        <a href="#mission" style={{ textDecoration: "none", color: "#ABABAB" }}>
          <h6>A nossa missão</h6>
        </a>
      </div>
    </div>
  );
};

export default Footer;
