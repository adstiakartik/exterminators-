import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container white">
      <div className="row">
        <div className="main-header">
          <div className="left-header">
            <h2 className="black strong ">Exterminators Pros</h2>
            <p className="black  ">Pune, MH</p>
          </div>
          <div className="right-header">
            <p className="black">Need Help?</p>
            <p className="red strong"> (877) 846-0510</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
