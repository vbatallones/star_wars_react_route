import React from 'react';
import { useLocation, useHistory } from 'react-router';

export default function StarShipsResults() {
    const location = useLocation();
    const history = useHistory();
	console.log(location);

    function goBackHandle() {
        history.goBack()
    }
	return (
		<div>
			<h1>Hello</h1>
			<h4>Name: {location.state.s.name}</h4>
			<h4>Model: {location.state.s.model}</h4>
            <button onClick={goBackHandle}>Go Back</button>
		</div>
	);
}
