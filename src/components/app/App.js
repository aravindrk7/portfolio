import Header from '../shared/header/Header';
import Home from '../home/Home';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import NoMatch from '../noMatch/NoMatch';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Resume from '../resume/Resume';
import Contact from '../contact/Contact';

function App() {
  return (
    <div className="app">
      <header>
        <Header />
        <main>
          <Switch >
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
