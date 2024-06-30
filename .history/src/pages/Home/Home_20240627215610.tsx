import React from 'react';
import './Home.css';
import NavBar from '../../components/p1/Navbar/NavBar';
import Welcome from '../../components/p1/WelcomeScreen/Welcome';
import ArrowDown from '../../components/p1/ArrowDown/ArrowDown';
import ScrollContext from '../../components/Scroll/ScrollContext';
import Pfp from '../../components/p2/pfp/Pfp';
import AboutMe from '../../components/p2/About/AboutMe';
import ContactButton from '../../components/p2/randomStuffAboutMe/ContactButton/ContactButton';
import Resume from '../../components/p2/randomStuffAboutMe/Resume/Resume';
import ProjectContainer from '../../components/p3/ProjectContainer/ProjectContainer';

const Home: React.FC = () => {
  const handleClick = (id: string) => {
    const nextDiv = document.getElementById(id);
    nextDiv?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={handleClick}>
      <div className="container">
        <div className="p1">
          <NavBar/>
          <Welcome/>
          <ArrowDown/>
        </div>
        <div id="p2" className="p2">
          <Pfp/>
          <AboutMe/>
          <ContactButton/>
          <Resume/>
        </div>
        <div id="p3" className='p3'>
          <ProjectContainer/>
          
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default Home;