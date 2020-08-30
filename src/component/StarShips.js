import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StarShips() {
	const [ships, setShips] = useState('');
	useEffect(() => {
		let url = 'https://swapi.dev/api/starships/';
		axios
			.get(url)
			.then((response) => {
				console.log(response.data.results)
				setShips(response.data.results);
			})
			.catch((err) => console.log(err));
	}, []);
	

	return (
		<div>
			<h1>Star Ships</h1>
			{ships.map(s => <li>{s.name}</li>)}
		</div>
	);
}

// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const Home = () => {
//    let [kanye, setKanye] = useState('')

//    useEffect(() => {
//    let kanyeRest = 'https://api.kanye.rest/'
//    axios.get(kanyeRest)
//    .then( response => {
//         setKanye(response.data.quote)
//       })
//    .catch(err => console.log(err.message))
//    }, [])
//    return (
//         <div>{kanye}</div>
//    )
// }
