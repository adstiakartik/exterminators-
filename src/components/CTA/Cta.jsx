import React from "react";
import "./Cta.scss";

const Cta = () => {
  return (
    <div className="cta-section text-align-center">
      <div className="cta-content white">
        <div className="row">
          <div className="cta-1">
            <h1>Pune, MH Pest Exterminator</h1>
            <h2>Pune Number 1 Pest Exterminator is Just 1 Call Away!</h2>
            <p>
              For Fast & Easy, Same-Day Service <br />
              CALL NOW to Get Rid of Those Pesky Pests Today!
            </p>
            <p className="cta-btn bg-red">
              <span>
                <i className="icon icon-phone">&#xe800;</i>{" "}
              </span>
              (877) 846-0510
            </p>
          </div>
          <ul className="first">
            <li>
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon icon-ok-circled">&#xe802;</i>
                </div>
                <div className="feature-tag">No-Obligation Estimates</div>
              </div>
            </li>
            <li>
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon icon-ok-circled">&#xe802;</i>
                </div>
                <div className="feature-tag">24-Hours / 7 Days a Week</div>
              </div>
            </li>
            <li>
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon icon-ok-circled">&#xe802;</i>
                </div>
                <div className="feature-tag">100% Quality Guaranteed</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cta;
