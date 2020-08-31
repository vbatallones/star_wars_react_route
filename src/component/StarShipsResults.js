import React from 'react';
import { useLocation, useHistory } from 'react-router';
// import axios from 'axios'

export default function StarShipsResults() {
	const location = useLocation();
	const history = useHistory();
	console.log(location);

	function goBackHandle() {
		history.goBack();
	}
	return (
		<div className="infos">
			<h1>Your Ship Information</h1>
			<h2>Name: {location.state.s.name}</h2>
			<p>Model: {location.state.s.model}</p>
			<p>Cargo Capacity: {location.state.s.cargo_capacity}</p>
			<p>Consumables: {location.state.s.consumables}</p>
			<p>Length: {location.state.s.length}</p>
			<p>Manufacturer: {location.state.s.manufacturer}</p>
			<p>Max Speed: {location.state.s.max_atmosphering_speed}</p>
			<p>Class: {location.state.s.starship_class}</p>
			<button onClick={goBackHandle}>Fall Back</button>
		</div>
	);
}
