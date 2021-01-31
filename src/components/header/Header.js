import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Connect from './Connect';
import './Header.css';
import Navbar from './Navbar';

function Header() {
    const [style, setStyle] = useState()
    function listenScrollEvent(e) {
        if (window.scrollY > 60) {
            setStyle({
                height:'70px',
                boxShadow: '0 0 5px gainsboro'
            })
        } else {
            setStyle()
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    return (
        <header className="header" style={style}>
            <Logo />
            <Navbar />
            <Connect />
        </header>
    )
}

export default Header;
