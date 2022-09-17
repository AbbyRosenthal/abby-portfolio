import React, {useState} from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: "National Park",
            description: "National Park is a website for outdoor enthusiast!  The website presents the current weather for the Top 5 National Parks and an address for the visitor center. ",
            image: "park.png",
            deployedLink: "https://abbyrosenthal.github.io/National-Park/",
            repo: "https://github.com/AbbyRosenthal/National-Park"
        },
        {
            name: "Tapp That",
            description: "Tapp That is a website for users to login and save beverages they love!  After logging in, users can leave reviews and 'tapp' to favorite beverages.",
            image: "tapp.png",
            deployedLink: "https://pour-me-another.herokuapp.com/",
            repo: "https://github.com/jbradley84/pour-me-another"
        },
        {
            name: "Scheduler",
            description: "about project one",
            image: "",
            deployedLink: "https://abbyrosenthal.github.io/calendar-planner/",
            repo: "https://github.com/AbbyRosenthal/calendar-planner"
        },
        {
            name: "Project Four",
            description: "about project one",
            image: "",
            deployedLink: "https://www.google.com",
            repo: "https://www.github.com/AbbyRosenthal"
        },
        {
            name: "Project Five",
            description: "about project one",
            image: "",
            deployedLink: "https://www.google.com",
            repo: "https://www.github.com/AbbyRosenthal"
        },
        {
            name: "Project Six",
            description: "about project one",
            image: "",
            deployedLink: "https://www.google.com",
            repo: "https://www.github.com/AbbyRosenthal"
        }
    ]);

    return (
        <section>
            <div>
                {projects.map(project =>(
                    <Project 
                    project = {project}
                    key = {project.name}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;