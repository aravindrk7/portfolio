import React from 'react';
import './About.css';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';

function About() {
    return (
        <div className="about">
            <section className="about__content">
                <p className="about__text-top">
                    I am a Fullstack developer with a lot of experience
                    designing and developing responsive and
                    scalable Web Applications.
                </p>
                <p className="about__text">
                    Has interest over
                    Problem solving, Optimization and Game
                    Development.
                    Have very good knowledge of Angular 2+, javascript, HTML, and CSS(SCSS). Love applying responsive designs to websites and am more interested in implementing creative ideas on websites.
                </p>
            </section>
            <section className="about__title">
                <VerticalTitle title="About" />
            </section>
        </div>
    )
}

export default About;
