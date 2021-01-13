import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function NavRoute(props) {
    console.log(props.to);
    return (
        <Link to={props.to} spy={true} activeClass="active-section" className="navbar__route" >
            {props.name}
        </Link>
    )
}

export default NavRoute;
