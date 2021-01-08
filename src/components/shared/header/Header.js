import React from 'react';
import Logo from './Logo';
import Connect from './Connect';
import './Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <header className="header">
            <Logo/>
            <Navbar/>
            <Connect/>
        </header>
    )
}

export default Header;
