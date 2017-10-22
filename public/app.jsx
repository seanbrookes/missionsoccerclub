import React from 'react';

import {
  Link
} from 'react-router-dom';
import { render } from 'react-dom'
import { browserHistory } from 'react-router';

import Home from './Home';
import AboutMain from './about/AboutMain';
import ProgramsMain from './programs/ProgramsMain';
import RefereesMain from './referees/RefereesMain';
import CoachesMain from './coaches/CoachesMain';
import Minis from './programs/Minis';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/programs/minis">Minis Program</Link></li>
        </ul>
        {this.props.children}
      </div>);
  }
};
