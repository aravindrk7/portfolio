import React from 'react';
import './Works.css';

// Web Projects
import project1 from './../../Images/web/project-1.jpg';
import project2 from './../../Images/web/project-2.JPG';
import project3 from './../../Images/web/Capture3.PNG';
import project4 from './../../Images/web/Capture4.PNG';

// Photoshop Projects
import invitaion from './../../Images/photoshop/invitation.jpg';
import haloween from './../../Images/photoshop/haloween.jpg';
import dramatic from './../../Images/photoshop/Dramatic.jpg';
import apple from './../../Images/photoshop/lion-apple.jpg';
import resume from './../../Images/photoshop/resume.jpg';
import logo1 from './../../Images/photoshop/logo1.jpg';
import logo2 from './../../Images/photoshop/logo2.PNG';

function Works() {
    return (
        <section className="works">
            <section className="works__content">
                <section className="works__web">
                    <h1>Web Development</h1>
                    <div className="content">

                        <div className="works_imgContainer">
                            <img src={project1} alt="" />
                            <div className="works_imgHover">
                                Worktracker
                        </div>
                        </div >
                        <div className="works_imgContainer">
                            <img src={project2} alt="" />
                            <div className="works_imgHover">
                                Project Management Tool
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
                                Chat Application
                        </div>
                        </div>
                    </div>

                </section>
                <section className="works__photoshop">
                    <h1>Photoshop</h1>
                    <div className="content">
                        <div className="works_imgContainer">
                            <img src={invitaion} alt="" />
                            <div className="works_imgHover">
                                Invitation
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={dramatic} alt="" />
                            <div className="works_imgHover">
                                Dramatic
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={haloween} alt="" />
                            <div className="works_imgHover">
                                Haloween
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={resume} alt="" />
                            <div className="works_imgHover">
                                Resume
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={apple} alt="" />
                            <div className="works_imgHover">
                                Apple
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={logo1} alt="" />
                            <div className="works_imgHover">
                                IE Logo ReDesign
                            </div>
                        </div>
                        <div className="works_imgContainer">
                            <img src={logo2} alt="" />
                            <div className="works_imgHover">
                                My Logo
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Works;
