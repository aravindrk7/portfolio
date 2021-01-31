import React from 'react';
import { Link } from "react-scroll";
import Button from '../../components/button/Button';
import './Home.css';

function Intro() {
    return (
        <div className="intro">
            <span>HELLO, I'M A</span>
            <div>Full Stack <span>Developer</span></div>
            <p>Hi I'm Aravind, a passionate full stack developer from Tirunelveli</p>
            <Link to="works" spy={true} smooth={true} offset={-60}>
                <Button text="View Works" />
            </Link>
        </div>
    )
}

export default Intro;
