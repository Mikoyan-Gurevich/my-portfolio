import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <React.Fragment>
            <Route path="/:path" component={Header} />
            <div className='body'>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
            </div>
            <Route path="/:foo" component={Footer} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;