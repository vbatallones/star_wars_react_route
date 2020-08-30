import React from 'react';

import StarShipsResults from './StarShipsResults'
export default function StarShips(props) {
    const allShips = props.ships.map((s, idx) => {
        return  <a href="/StarShipsResults" key={idx}>{s.name}</a>
    })
	return (
		<div>
			<h1>Star Ships</h1>
            {/* {weather ? <WeatherResult weather={weather} /> : null} */}
			{allShips}
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
