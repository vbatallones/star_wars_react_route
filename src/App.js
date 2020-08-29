import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './component/Home'


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <Link to="/">Tatooine</Link>{' '}
      </nav>

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
