import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';

function About() {
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
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: .1, duration: 1,
            }
        }
    }
    return (
        <section

            className="about" >
            <div className="titleContainer">
                <Title title="About Me" />
            </div>
            <motion.section
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={textVariants}
                className="about__content">
                <p className="about__text-top">
                    I am a Fullstack developer with a lot of experience
                    designing and developing responsive and
                    scalable Web Applications.
                </p>
                <p className="about__text">
                    Has interest over
                    Problem solving, Optimization and Game
                    Development.
                    Have very good knowledge of React, Angular 2+, javascript, HTML and CSS/SCSS. Love applying responsive designs to websites and am more interested in implementing creative ideas on websites.
                </p>
                <div className="about__buttonContainer">
                    <a href={process.env.PUBLIC_URL + "/files/resume.docx"} download="aravind_resume">
                        <Button text="Download Resume" />
                    </a>
                </div>
            </motion.section>
        </section>
    )
}

export default About;
