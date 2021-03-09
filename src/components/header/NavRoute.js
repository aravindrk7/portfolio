import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { motion } from 'framer-motion';

function NavRoute(props) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: .1, duration: 3, type: 'spring', stiffness: 120 }}>
            <Link
                to={props.to} spy={true} smooth={true} activeClass="active-section" className="navbar__route" offset={-60} >
                {props.name}
            </Link>
        </motion.div >

    )
}

export default NavRoute;
