import React from 'react';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';
import './Works.css';
import project1 from './../../Images/Capture1.PNG';
import project2 from './../../Images/Capture2.PNG';
import project3 from './../../Images/Capture3.PNG';
import project4 from './../../Images/Capture4.PNG';

function Works() {
    return (
        <div className="works">
            <section className="works__content">
                <div className="works_imgContainer">
                    <img src={project1} alt="" />
                    <div className="works_imgHover">
                        Worktracker
                    </div>
                </div >
                <div className="works_imgContainer">
                    <img src={project2} alt="" />
                    <div className="works_imgHover">
                        Fireworks
                    </div>
                </div>
                <div className="works_imgContainer">
                    <img src={project3} alt="" />
                    <div className="works_imgHover">
                        Minesweeper
                    </div>
                </div>
                <div className="works_imgContainer">
                    <img src={project4} alt="" />
                    <div className="works_imgHover">
                        Chat
                    </div>
                </div>
            </section>
            <section className="works__title">
                <VerticalTitle title="Works" />
            </section>
        </div>
    )
}

export default Works;
