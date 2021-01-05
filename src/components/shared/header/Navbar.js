import React from 'react';
import './Header.css';
import NavRoute from './NavRoute';

function Navbar() {
    return (
        <nav className="navbar">
            <NavRoute path='home' id={1} name="Home" />
            <NavRoute path='about' id={2} name="About" />
            <NavRoute path='works' id={3} name="Works" />
            <NavRoute path='resume' id={4} name="Resume" />
            <NavRoute path='contact' id={5} name="Contact" />
        </nav>
    )
}

export default Navbar;
