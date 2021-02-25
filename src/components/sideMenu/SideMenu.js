import React from 'react';
import './SideMenu.css';
import { FiX } from "react-icons/fi";
import NavRoute from '../header/NavRoute';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function SideMenu(props) {
    return (
        <div className="sideMenu">
            <div className="sideMenu__close" onClick={() => props.close(false)} >
                <FiX />
            </div>
            <div className="sideMenu__top">
                <NavRoute to='home' name="Home" />
                <NavRoute to='about' name="About" />
                <NavRoute to='works' name="Works" />
                <NavRoute to='contact' name="Contact" />
            </div>
            <div className="sideMenu__bottom">
                <FaLinkedinIn title="LinkedIn" className="connect__icon" onClick={() => window.open("https://www.linkedin.com/in/aravind-r-263254170/", "_blank")} />
                <FaGithub title="Github" className="connect__icon" onClick={() => window.open("https://github.com/aravindrk7", "_blank")} />
                <FaInstagram title="Instagram" className="connect__icon" onClick={() => window.open("https://www.instagram.com/aravind_7/", "_blank")} />
                <FaFacebookF title="Facebook" className="connect__icon" onClick={() => window.open("https://www.facebook.com/Aravindnov30/", "_blank")} />
            </div>
        </div >
    )
}

export default SideMenu;