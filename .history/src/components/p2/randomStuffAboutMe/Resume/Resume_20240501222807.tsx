import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="ResumeButtonContainer">
            <div className='ResumeButton' onClick={()=> {ResumePDF}}>

            </div>
        </div>
    );
}


export default Resume;