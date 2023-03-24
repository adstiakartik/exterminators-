import React from "react";
import "./Cta.scss";

const Cta = () => {
  return (
    <div className="cta-content strong white">
      <h1>Pune, MH Pest Exterminator</h1>
      <h2>Pune Number 1 Pest Exterminator is Just 1 Call Away!</h2>
      <p>
        For Fast & Easy, Same-Day Service CALL NOW to Get Rid of Those Pesky
        Pests Today!
      </p>
      <p className="cta-btn">(877) 846-0510</p>
      <div className="cta-list">
        <ul>
          <li>No-Obligation Estimates</li>
          <li>24-Hours / 7 Days a Week</li>
          <li>100% Quality Guaranteed</li>
        </ul>
      </div>
    </div>
  );
};

export default Cta;
