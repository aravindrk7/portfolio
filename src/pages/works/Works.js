import React from 'react';
import { motion } from 'framer-motion';
import './Works.css';
import worksData from './../../data/works.json';
import Title from '../../components/title/Title';
import Work from './Work';

function Works() {
    const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    }
    return (
        <section className="works">
            <div className="titleContainer">
                <Title title="My Works" />
            </div>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="works__content">
                {worksData?.map(work => (
                    <Work work={work} />
                ))}
            </motion.section>
        </section >
    )
}

export default Works;
