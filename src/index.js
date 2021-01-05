import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/portfolio">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
