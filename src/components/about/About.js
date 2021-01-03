import React from 'react';
import './About.css';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';

function About() {
    return (
        <div className="about">
            <section className="about__content">
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint consequatur quod eligendi ex, incidunt impedit dolorem officia. Autem sint a explicabo non reprehenderit, exercitationem ad sunt quo quia architecto.</p>
            </section>
            <section className="about__title">
                <VerticalTitle title="About" />
            </section>
        </div>
    )
}

export default About;
