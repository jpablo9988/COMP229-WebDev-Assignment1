import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/jpmakesgames.png';
export default function Layout() {
     return (
        <>
            
            <h1>
            <img src={Logo}alt="logo" className="logo" width="240px" height="240px"/>
            <b> Portafolio Page </b>
             </h1>
            <nav>
            <Link to="/"> Home </Link> | <Link to="/about"> About </Link> |
                <Link to="/project"> Project </Link>| <Link to="/services"> Services </Link>| 
                 <Link to="/contact"> Contact </Link>
             </nav>
                <br/>
             <hr />
         </>
     );
}
