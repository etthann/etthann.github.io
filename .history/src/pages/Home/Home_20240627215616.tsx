import React from 'react';


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