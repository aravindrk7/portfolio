import React from 'react';
import './Header.css';
import NavRoute from './NavRoute';

function Navbar() {
    return (
        <nav className="navbar">
            <NavRoute to='home' name="Home" />
            <NavRoute to='about' name="About" />
            <NavRoute to='works' name="Works" />
            {/* <NavRoute path='resume' name="Resume" /> */}
            <NavRoute to='contact' name="Contact" />
        </nav>
    )
}

export default Navbar;
