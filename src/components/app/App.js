import Header from '../shared/header/Header';
import Home from '../home/Home';
import './App.css';
// import { Switch, Route, Redirect } from "react-router-dom";
import About from '../about/About';
import Works from '../works/Works';
import Contact from '../contact/Contact';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
