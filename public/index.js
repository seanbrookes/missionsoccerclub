import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import App from './app.jsx';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import './style.css';
//import Icon from './icon.png';
// https://webpack.js.org/guides/development/#webpack-dev-server

import Home from './Home';
import AboutMain from './about/AboutMain';
import ProgramsMain from './programs/ProgramsMain';
import RefereesMain from './referees/RefereesMain';
import CoachesMain from './coaches/CoachesMain';
import Minis from './programs/Minis';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/programs/minis">Minis Program</Link></li>
      </ul>
      <Route path='/about' component={AboutMain} />
      <Route path='/programs' component={ProgramsMain} />
      <Route path="/" component={Home}/>
    </div>
  </Router>,
  document.getElementById('root')
);
