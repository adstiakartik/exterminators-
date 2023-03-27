import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-green grey">
      <div class="container">
        <div class="row">
          <div class="logo-holder">
            <h2>Exterminators Pro</h2>
            <p class="copyright">
              © 2022 exterminatorspros.com — All Rights Reserved
            </p>
          </div>
          <div class="discalimer">
            <p>
              Exterminators Pros is a free referral service that helps users
              connect with local service providers. Our service includes a
              nationwide network of contractors and a 24/7 customer support and
              dispatch center. All contractors are independent and Exterminators
              Pros does not endorse or guarantee any work performed. It is the
              responsibility of the user to verify the contractor they hire has
              the necessary license and insurance required for the work being
              performed. Any third party products, brands or trademarks listed
              above are the sole property of their respective owner. No
              affiliation or endorsement is intended or implied. All persons
              depicted are actors or models and not contractors listed on
              Exterminators Pros.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
