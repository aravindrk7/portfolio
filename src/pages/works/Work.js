import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Works.css';
import { FiExternalLink } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import PopupContext from './../../contexts/PopupContext';

function Work({ work }) {
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
    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    }
    const { setImage } = useContext(PopupContext);
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="works__myWork" key={work.id}>
            <div className="works__myWorkImageContainer">
                <img className="works__myWorkImage" src={process.env.PUBLIC_URL + work.image.thumbnail} alt={work.title} />
            </div>
            <div className="works__myWorkImageHover">
                {(work.category === 'Web Development' || work.category === 'game')
                    && <>
                        <a href={work.link} target="blank" className="works__myWorkImageHoverContent">
                            <FiExternalLink className="works__icon" />
                            <p>Website</p>
                        </a>
                        <a href={work.gitLink} target="blank" className="works__myWorkImageHoverContent">
                            <FiGithub className="works__icon" />
                            <p>Code</p>
                        </a>
                    </>}
                <div className="works__myWorkImageHoverContent" onClick={() => setImage(work.image.original)}>
                    <FiEye className="works__icon" />
                    <p>View</p>
                </div>
            </div>
            <div className="works__info">
                <div className="works__infoHeader">
                    <p>{work.title}</p>
                    <span>{work.started_at}</span>
                </div>
                <div className="works__infoFooter">
                    <div>
                        <img
                            src={work.category === 'Photoshop'
                                ? process.env.PUBLIC_URL + "/images/photoshop-logo.svg"
                                : (work.category === 'game'
                                    ? process.env.PUBLIC_URL + "/images/game.jpg"
                                    : process.env.PUBLIC_URL + "/images/web.png")}
                            alt="" />
                        <span>{work.category}</span>
                    </div>
                </div>
            </div>

        </motion.div >
    )
}

export default Work;
