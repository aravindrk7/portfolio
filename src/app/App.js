import React, { useState } from 'react';
import Header from '../components/header/Header';
import './App.css';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Works from '../pages/works/Works';
import Contact from '../pages/contact/Contact';
import Popup from '../components/popup/Popup';
import PopupContext from './../contexts/PopupContext';

function App() {
  const [image, setImage] = useState(null);
  return (
    <PopupContext.Provider value={{ image, setImage }}>
      <div className="app">
        <Popup />
        <Header />
        <div className="pageContainer" id="home">
          <Home />
        </div>
        <div className="pageContainer" id="about">
          <About />
        </div>
        <div className="pageContainer" id="works">
          <Works />
        </div>
        <div className="pageContainer" id="contact">
          <Contact />
        </div>
      </div>
    </ PopupContext.Provider >
  );
}

export default App;
