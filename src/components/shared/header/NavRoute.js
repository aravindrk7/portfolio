import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

function NavRoute(props) {
    return (
        <NavLink to={props.path} title={props.name} activeClassName='is-active-route' className="navbar__route" >
            {props.name}
        </NavLink>
    )
}

export default NavRoute;
