import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Logo() {
    return (
        <Link to="home" spy={true} smooth={true} className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo-1.png"} alt="Aravind" />
        </Link>
    )
}

export default Logo;
