import observer from "../Obeserver";
import React, { useEffect } from "react";
import "../Framework/Framework.css";
import Expo from '../../../images/MainImages/svg/expo.svg'

const Frameworks: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".Hide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section>
      <div className="FrameworksText Hide">Frameworks</div>
      <div className="FrameworksContainer">
        <div className="Frameworks Hide">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React Logo"
          />
        </div>
        <div className="Frameworks Hide">
            <img src={Expo} alt="Expo Logo"/>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
