import React, { useEffect } from "react";
import observer from "../Obeserver";
import "../Logo/Logo.css"
import Java from '../../../images/MainImages/svg/java.svg'

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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Javascript Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript Logo"
              />
            </div>
            <div className="Logo Hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C logo"
              />
            </div>
          </div>
        </section>
      );
}

export default Logo;