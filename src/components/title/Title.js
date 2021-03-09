import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Title.css';

function Title(props) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);
    const titleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1, scale: 1,
            transition: {
                delay: .1, duration: 3, type: 'spring', stiffness: 120
            }
        }
    }
    return (
        <div className="title">
            <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariants}>
                {props.title}</motion.p>
        </div>
    )
}

export default Title;
