import React from 'react';
import './VerticalTitle.css';
function VerticalTitle(props) {
    return (
        <div className="verticalTitle">
            <p>{props.title}</p>
        </div>
    )
}

export default VerticalTitle;
