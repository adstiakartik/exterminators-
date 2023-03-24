import React from "react";
import "./Left.scss";

const Left = () => {
  return (
    <div className="left  ">
      <div className="left-content">
        <img
          src="https://www.exterminatorspros.com/lp/assets/img/pest-control-company.webp"
          alt=""
        />
        <h4 className="left-content-headline"> We're Available Now</h4>

        <p className="left-content-paragraph1">
          Our Fully Trained Experts Are Ready to Help You. Call Now For Your
          Risk-FREE Quote
        </p>
        <p className="left-content-paragraph2 strong bg-red white">
          {" "}
          (877) 846-0510
        </p>
        <p className="left-content-paragraph3">
          <span className="strong">Delhi, DL</span> Pest Exterminator
        </p>
      </div>
    </div>
  );
};

export default Left;
