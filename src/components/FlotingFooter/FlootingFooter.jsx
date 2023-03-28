import React, { useState, useEffect } from "react";
import "./FlootingFooter.scss";



// window.addEventListener(
//   "scroll",
//   function (event) {
//     var scrollPos = window.scrollY,
//       sticky_cta = document.getElementById("mobile-cta"),
//       sticky_threshold = 300;
//     if (scrollPos > sticky_threshold) {
//       sticky_cta.classList.add("mobile-cta-open");
//     } else {
//       sticky_cta.classList.remove("mobile-cta-open");
//     }
//   },
//   false
// );
const FlootingFooter = () => {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 500) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.document.addEventListener("scroll", scrollListener);

    return () => window.document.removeEventListener("scroll", scrollListener);
  }, []);
  return (
    <div className={`mobile-cta  bg-white ${showFooter ? 'show' : 'hide'}` } id="mobile-cta">
      <div className="mobile-cta-container">
        <a href="tel:(877) 846-0510" className="help bg-red">
          Get Help Now
        </a>
        <a href="tel:(877) 846-0510" className="call">
          Call us 24/7 at <span>(877) 846-0510</span>
        </a>
      </div>
    </div>
  );
};

export default FlootingFooter;