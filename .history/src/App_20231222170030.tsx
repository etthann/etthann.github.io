import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start/Start';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';

const App: React.FC = () => {

return (
      <Routes>
        <Route path='/'element={<Start/>}/>
        <Route path='Home'element={<Home/>}/>
        <Route path= "Index" element={<Main/>}/>
      </Routes>
  );
}

export default App;
