import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="mid">
            <div className="mid1 white text-align-center">
              <h1 className="strong ">Pune, MH Pest Exterminator</h1>
              <h3 className="strong ">
                Pune Number 1 Pest Exterminator is Just 1 Call Away!
              </h3>
              <p>For Fast & Easy, Same-Day Service</p>
              <p>CALL NOW to Get Rid of Those Pesky Pests Today!</p>
            </div>
            <div className="mid2 white text-align-center">
              <a href="#" className="bg-red white">
                <i className="icon icon-phone">&#xe800;</i>(877) 846-0510
              </a>
              <div className="stars">
                <i className="icon yellow icon-star">&#xe801;</i>
                <i className="icon yellow icon-star">&#xe801;</i>
                <i className="icon yellow icon-star">&#xe801;</i>
                <i className="icon yellow icon-star">&#xe801;</i>
                <i className="icon yellow icon-star-half-alt">&#xf123;</i>
              </div>
            </div>
            <div className="mid3 white text-align-center">
              <div className="star-holder">
                <div className="left-divider divider">
                  <hr />
                </div>
                <div className="h3">
                  <h3>We Can Exterminate Today</h3>
                </div>
                <div className="right-divider divider">
                  <hr />
                </div>
              </div>
            </div>
            <div className="mid4 white text-align-center">
              <div className="feature-holder">
                <ul className="first">
                  <li>
                    <div className="feature">
                      <div className="feature-icon">
                        <i className="icon icon-ok-circled">&#xe802;</i>
                      </div>
                      <div className="feature-tag">
                        Available 24-Hrs
                        <br />7 Days / Week
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <div className="feature-icon">
                        <i className="icon icon-ok-circled">&#xe802;</i>
                      </div>
                      <div className="feature-tag">
                        Same / Next Day
                        <br />
                        Appointments
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <div className="feature-icon">
                        <i className="icon icon-ok-circled">&#xe802;</i>
                      </div>
                      <div className="feature-tag">
                        FREE,
                        <br />
                        Up-Front Quotes
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <div className="feature-icon">
                        <i className="icon icon-ok-circled">&#xe802;</i>
                      </div>
                      <div className="feature-tag">
                        100% Protection,
                        <br />
                        From All Pests
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Hero;
