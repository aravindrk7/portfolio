import React from 'react';
import './Header.css';
import logo from './../../../Images/logo-1.png';
import { Link } from 'react-scroll';

function Logo() {
    return (
        <Link to="home" spy={true} className="logo">
            <img src={logo} alt="Aravind"/>
        </Link>
    )
}

export default Logo;
