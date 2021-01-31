import Header from '../components/header/Header';
import './App.css';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Works from '../pages/works/Works';
import Contact from '../pages/contact/Contact';

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
