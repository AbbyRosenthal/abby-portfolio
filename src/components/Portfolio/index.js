import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function Portfolio({ currentCategory }) {

    const {name, description } = currentCategory;
    
    return (
        <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p> {description} </p>
    </section>
    );
}

export default Portfolio;