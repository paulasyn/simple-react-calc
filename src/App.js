// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Calculator from './components/calculator.component';
import About from './components/about.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React Simple Calculator</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Calculator</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
              </ul> 
            </div>
            
          </nav> <br/>
          <h2>Welcome to a Simple React Calculator</h2> <br/>
          <Switch>
            <Route exact path='/about' component={ About } />
            <Route path='/' component={ Calculator } />
          </Switch> 
        </div>
      </Router>
    );
  }
}
export default App;
