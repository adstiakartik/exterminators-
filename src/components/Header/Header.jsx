import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="bg-white">
      <div className="container white">
        <div className="row">
          <div className="left-header">
            <h2 className="black strong ">Exterminators Pros</h2>
            <p className="black">Pune, MH</p>
          </div>
          <div className="right-header">
            <span className="black">Need Help?</span>
            <a className="red strong" href="#">
              <i className="icon icon-phone">&#xe800;</i> (877) 846-0510
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
