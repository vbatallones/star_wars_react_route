import React from 'react';

import { Link } from 'react-router-dom';

export default function StarShips(props) {
	const allShips = props.ships.map((s, idx) => {
		return (
			<Link
				className="ships"
				to={{ pathname: '/starshipsresults', state: { s } }}
				key={idx}
			>
				{s.name}
			</Link>
		);
	});

	return (
		<div>
			<h1>Star Ships</h1>
			<div className="allShips">{allShips}</div>
		</div>
	);
}
