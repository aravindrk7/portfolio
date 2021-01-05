import React from 'react';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';
import './Resume.css';
import resume from './../../Images/resume.PNG'

function Resume() {
    return (
        <div className="resume">
            <section className="resume__content">
                {/* <img src={resume} alt=""/> */}
            </section>
            <section className="resume__title">
                <VerticalTitle title="Resume" />
            </section>
        </div>
    )
}

export default Resume;
