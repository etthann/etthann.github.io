import "./SocialMedia.css";
import React, { useEffect } from "react";
import ExternalLink from '../../../images/MainImages/svg/external_link.svg'
import observer from "../Obeserver";

interface SocialMediaProps {
    username: string;
    profilePicture: string;
    profileLink: string;
}

const SocialMedia: React.FC<SocialMediaProps> = (props) => {

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".HideSocialMedia");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="SocialMediaContainer HideSocialMedia">
      <div className="ProfileContainer">
        <div className="ProfilePictureContainer">
            <img src={props.profilePicture} alt="" className="ProfilePicture"/>
        </div>
        <div className="Username">{props.username}</div>
            <a href={props.profileLink} rel="noopener noreferrer" target='_blank' className="GoToInstaProfile">
                <img src={ExternalLink} alt="External Link Logo"/>
            </a>
      </div>
    </div>
  );
};

export default SocialMedia;
