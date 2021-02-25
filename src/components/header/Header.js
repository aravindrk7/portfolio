import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Connect from './Connect';
import './Header.css';
import Navbar from './Navbar';
import { FiMenu } from "react-icons/fi";
import SideMenu from '../sideMenu/SideMenu';

function Header() {
    const [style, setStyle] = useState();
    const [showSideMenu, setShowSideMenu] = useState(false);
    function listenScrollEvent(e) {
        if (window.scrollY > 60) {
            setStyle({
                height: '70px',
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
            <div className="header__menu">
                <div onClick={() => setShowSideMenu(true)}>
                    <FiMenu />
                </div>
                {showSideMenu &&
                    <SideMenu close={setShowSideMenu} />
                }
            </div>
        </header>
    )
}

export default Header;
