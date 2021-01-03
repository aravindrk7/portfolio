import React from 'react';
import VerticalTitle from '../shared/verticalTitle/VerticalTitle';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <section className="portfolio__content">
                Portfolio
            </section>
            <section className="portfolio__title">
                <VerticalTitle title="Portfolio" />
            </section>
        </div>
    )
}

export default Portfolio;
