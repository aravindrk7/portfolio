import React from 'react';
import './Header.css';
import logo from './../../../Images/logo.PNG';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to="home" className="logo">
            <img src={logo} alt="Aravind"/>
        </NavLink>
    )
}

export default Logo;
