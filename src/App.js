import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './component/Home'
import StarShips from './component/StarShips';


function App() {
  
  return (
    <Router>
      <div className="App">
      <nav>
        <Link to="/">Tatooine</Link>{' '}
        <Link to="/startships">Star Ships</Link>{' '}
      </nav>

        <Route exact path="/" component={Home} />
        <Route path="/starships" component={StarShips}/>
        
      </div>
    </Router>
  );
}

export default App;
