import React from 'react';
import './Title.css';
function Title(props) {
    return (
        <div className="title">
            <p>{props.title}</p>
        </div>
    )
}

export default Title;
