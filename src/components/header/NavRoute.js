import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function NavRoute(props) {
    return (
        <Link to={props.to} spy={true} smooth={true} activeClass="active-section" offset={-60} className="navbar__route" >
            {props.name}
        </Link>
    )
}

export default NavRoute;
