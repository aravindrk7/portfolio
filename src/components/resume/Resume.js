import React from 'react';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';
import './Resume.css';

function Resume() {
    return (
        <div className="resume">
            <section className="resume__content">
                resume
            </section>
            <section className="resume__title">
                <VerticalTitle title="Resume" />
            </section>
        </div>
    )
}

export default Resume;
