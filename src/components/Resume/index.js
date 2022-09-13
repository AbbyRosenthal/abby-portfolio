import React from 'react';
import currentResume from '../../assets/currentResume.pdf';

function Resume() {
    return(
        <>
        <h1>Resume</h1>
        <object width="100%" height="800" data={currentResume} type="application/pdf" />
        </>
    )
}

export default Resume; 