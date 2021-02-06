import React from 'react';
import './About.css';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';

function About() {
    return (
        <section className="about" >
            <div className="titleContainer">
                <Title title="About Me" />
            </div>
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
                    Have very good knowledge of React, Angular 2+, javascript, HTML and CSS/SCSS. Love applying responsive designs to websites and am more interested in implementing creative ideas on websites.
                </p>
                <div className="about__buttonContainer">
                    <a href={process.env.PUBLIC_URL + "/files/resume.docx"} download="aravind_resume">
                        <Button text="Download Resume" />
                    </a>
                </div>
            </section>
        </section>
    )
}

export default About;
