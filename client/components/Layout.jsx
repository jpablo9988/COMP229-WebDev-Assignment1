import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/jpmakesgames.png';
export default function Layout() {
     return (
        <>
            <img src={Logo}alt="logo" className="logo" width="160px" height="160px"/>
            <h1>
            <b> Portafolio Page </b>
             </h1>
            <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |
                <Link to="/project">Project</Link>| <Link to="/services">Services</Link>| 
                 <Link to="/contact">Contact</Link>
             </nav>
                <br/>
             <hr />
         </>
     );
}