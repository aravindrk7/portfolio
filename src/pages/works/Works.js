import React, { useContext } from 'react';
import './Works.css';
import worksData from './../../data/works.json';
import Title from '../../components/title/Title';
import { FiExternalLink } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import PopupContext from './../../contexts/PopupContext';

function Works() {
    const { image, setImage } = useContext(PopupContext);
    const openWebsite = (link) => {
        console.log(link);
    };
    return (
        <section className="works">
            <div className="titleContainer">
                <Title title="My Works" />
            </div>
            <section className="works__content">
                {worksData?.map(work => (
                    <div className="works__myWork" key={work.id}>
                        <div className="works__myWorkImageContainer">
                            <img className="works__myWorkImage" src={process.env.PUBLIC_URL + work.image.thumbnail} alt={work.title} />
                        </div>
                        <div className="works__myWorkImageHover">
                            {work.category === 'Web Development'
                                && <>
                                    <a href={work.link} target="blank" className="works__myWorkImageHoverContent">
                                        <FiExternalLink className="works__icon" onClick={() => openWebsite(work.link)} />
                                        <p>Website</p>
                                    </a>
                                    <a href={work.gitLink} target="blank" className="works__myWorkImageHoverContent">
                                        <FiGithub className="works__icon" onClick={() => openWebsite(work.gitLink)} />
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
                                            : process.env.PUBLIC_URL + "/images/web.png"}
                                        alt="" />
                                    <span>{work.category}</span>
                                </div>
                                {/* <div className="works__like">
                                    <span>{work.likes}</span>
                                    <div onClick={() => likeProject(work.id)}>
                                        {work.likes > 0
                                            ? <FcLike />
                                            : <FcLikePlaceholder />
                                        }
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div >
                ))}
            </section>
        </section >
    )
}

export default Works;
