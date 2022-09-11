import React from 'react';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import PageContent from '../PageContent';

export default function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case "About Me":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume />
            default:
                return <About />
        }
    }
    return (
        <> 
        <PageContent>
            {renderPage()}
        </PageContent>
        </>
    )
}