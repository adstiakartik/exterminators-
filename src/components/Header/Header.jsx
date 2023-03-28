import React from "react";
import "./Header.scss";
import Img from "../../assets/logo.png"

const Header = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container white">
        <div className="row">
          <div className="left-header">
              <img src={Img}/>
              <div className="black  ">Exterminators Pros</div>
              <p className="black  ">Pune, MH</p>
            </div>
            <div className="right-header">
              <p className="black">Need Help?</p>
              <a className="red strong" href="#"><i className="icon icon-phone">&#xe800;</i> (877) 846-0510</a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
