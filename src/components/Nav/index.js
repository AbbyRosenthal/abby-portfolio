import React from "react";
import { capitalizeFirstLetter } from "../../utils/helper";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    return (
        <div className="flex-row px-1">
            <nav>
                <ul className="flex-row nav">
                    <li className="mx-2">
                        <a onClick={() => setCurrentPage(pages[0])}
                            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <a onClick={() => setCurrentPage(pages[1])}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <a onClick={() => setCurrentPage(pages[2])}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <a onClick={() => setCurrentPage(pages[3])}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div >
    );
}









export default Nav;