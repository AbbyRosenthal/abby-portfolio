import React from 'react';

export default function Header(props) {

    return (
        <header>
            <h1 className="header-name">Abby Rosenthal</h1> 
            {props.children}
        </header>
    )
};