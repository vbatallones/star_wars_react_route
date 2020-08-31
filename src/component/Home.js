import React from 'react';

import logo from '../images/yoda-5.jpg'
export default function Home (props) {
    return(
        <div>
            <h1 className="welcome">Welcome Trooper!</h1>
            <img src={logo} alt="yoda" width="600px"/>
        </div>
    )
}