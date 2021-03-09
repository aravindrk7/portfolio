import React from 'react';
import './Button.css';
import { motion } from 'framer-motion';

function Button(props) {
    return (
        <div>
            <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                className="button">{props.text}</motion.button>
        </div>
    )
}

export default Button;
