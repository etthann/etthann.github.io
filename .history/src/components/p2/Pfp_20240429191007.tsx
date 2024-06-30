import React from "react";
import './Pfp.css';
import pfpBlack from '../../photos/random/blackPfp.jpg';

const Pfp: React.FC = () => {
    return ( 
        <div className="pfpContainer">
            <img alt="Me" src={pfpBlack}/>
        </div>
    );
}

export default Pfp;