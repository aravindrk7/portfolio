import React from 'react';
import './Header.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Connect() {
    return (
        <div className="connect">
            <FaLinkedinIn title="LinkedIn" className="connect__icon" onClick={()=> window.open("https://www.linkedin.com/in/aravind-r-263254170/", "_blank")}/>
            <FaGithub title="Github" className="connect__icon" onClick={()=> window.open("https://github.com/aravindrk7", "_blank")} />
            <FaInstagram title="Instagram" className="connect__icon" onClick={()=> window.open("https://www.instagram.com/aravind_7/", "_blank")}/>
            <FaFacebookF title="Facebook" className="connect__icon" onClick={()=> window.open("https://www.facebook.com/Aravindnov30/", "_blank")}/>
        </div>
    )
}

export default Connect;
