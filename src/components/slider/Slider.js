import React, { useRef } from 'react';
import './Slider.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Slider(props) {
    const myRef = useRef();
    const scrollLeft = () => {
        myRef.current.scrollLeft -= props.scrollDistance;
    };
    const scrollRight = () => {
        myRef.current.scrollLeft += props.scrollDistance;
    };
    return (
        <div className="slider">
            <div className="slider__leftArrow" onClick={scrollLeft}>
                <FaArrowAltCircleLeft />
            </div>
            <div ref={myRef} className="slider__items">
                {props.children}
            </div>
            <div className="slider__rightArrow" onClick={scrollRight}>
                <FaArrowAltCircleRight />
            </div>
        </div >
    )
}

export default Slider;
