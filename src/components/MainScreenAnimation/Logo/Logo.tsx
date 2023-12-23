import React, { useEffect } from "react";
import observer from "../Obeserver";
import "../Logo/Logo.css"
import Java from './././images/MainImages/png/java.png'
import Javascript from './././images/MainImages/png/js.png'
import Python from './././images/MainImages/png/python.png'
import Typescript from './././images/MainImages/png/typescript.png'
import C from './././images/MainImages/png/C.png'

const Logo: React.FC = () => {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".Hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    
        // Clean up the observer when the component unmounts
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []);
    
      return (
        <section>
          <div className="SkillsText Hidden">Languages</div>
          <div className="LogoContainer">
            <div className="Logo Hidden">
              <img
                src={Java}
                alt="Java Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src={Python}
                alt="Python Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src={Javascript}
                alt="Javascript Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src={Typescript}
                alt="Typescript Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src={C}
                alt="C logo"
              />
            </div>
          </div>
        </section>
      );
}

export default Logo;