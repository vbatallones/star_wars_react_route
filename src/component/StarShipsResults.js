import React from 'react';
import {useLocation} from 'react-router'

export default function StarShipsResults() {
    const location = useLocation();
     console.log(location)
    return (
        <div>
            <h1>Hello</h1>
            <h4>Name: {location.state.s.name}</h4>
            <h4>Model: {location.state.s.model}</h4>
            
        </div>
    )
}