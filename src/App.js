import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import axios from 'axios';
import Home from './component/Home';
import StarShips from './component/StarShips';
import StarShipsResults from './component/StarShipsResults';
import Footer from './component/Footer'


function App() {
	const [ships, setShips] = useState([]);
  let[loading, setLoading] = useState(true)

	useEffect(() => {
		let url = `https://swapi.dev/api/starships/`;
		// console.log('Real type of ships', typeof ships)
		axios
			.get(url)
			.then((response) => {
        //console.log(response.data);
        setLoading(false)
				setShips(response.data.results);
			})
			.catch((err) => console.log(err));
  }, []);
  
if (!loading){
	return (
		<Router>
			<>
				<div className="App">
					<nav>
						<h1 className="title">May the Force be with You</h1>
						<Link to="/">Tatooine</Link> <Link to="/starships">Star Ships</Link>{' '}
					</nav>
        
          <Route exact path="/" component={Home} />
          
          <Route path="/starships" render={() => <StarShips ships={ships} />} />
          <Route path="/starshipsresults" component={StarShipsResults} />
          <Footer/>
          
        </div>
			</>
		</Router>
  );
  } else {
    return <h1 className="loading">Forcing ...</h1>
  }
}

export default App;



