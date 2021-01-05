import React from 'react';
import { NavLink } from "react-router-dom";
import './Home.css';

function Intro() {
    return (
        <div className="intro">
            <span>HELLO, I'M A</span>
            <div>Full Stack <span>Developer</span></div>
            <p>Hi I'm Aravind, a passionate full stack developer from Tirunelveli</p>
            <NavLink to="works" title="Portfolio" >
                <button className="intro__button">View Works</button>
            </NavLink>
        </div>
    )
}

export default Intro;
