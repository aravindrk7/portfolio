import React, { useContext } from 'react';
import './Popup.css';
import { FiX } from "react-icons/fi";
import PopupContext from './../../contexts/PopupContext';

function Popup() {
    const { image, setImage } = useContext(PopupContext);
    return (
        <>
            {
                image &&
                <div className="popup">
                    <FiX className="popup__icon" onClick={() => setImage(null)} />
                    <img src={process.env.PUBLIC_URL + image} alt="" />
                </div>
            }
        </>
    )
}

export default Popup;
