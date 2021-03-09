import React from 'react';
import { Link } from "react-scroll";
import Button from '../../components/button/Button';
import './Home.css';
import { motion } from 'framer-motion';

function Intro() {
    return (
        <motion.div
            initial={{ opacity: 0, x: '-200px' }}
            animate={{ opacity: 1, x: '0px' }}
            transition={{ delay: .1, duration: 3, type: 'spring', stiffness: 120 }} className="intro">
            <span>HELLO, I'M Aravind</span>
            <div>Full Stack <span>Developer</span></div>
            <p>from Tirunelveli, Tamilnadu. Specialized In React and Nodejs.</p>
            <Link to="works" spy={true} smooth={true} offset={-60}>
                <Button text="View Works" />
            </Link>
        </motion.div>
    )
}

export default Intro;
