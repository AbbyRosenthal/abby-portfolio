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
            description: "Scheduler is a webpage that allows the user to create/delete tasks for their daily plan.  The colors of the time blocks change to reflect future, current and past time slots.",
            image: "calendar.png",
            deployedLink: "https://abbyrosenthal.github.io/calendar-planner/",
            repo: "https://github.com/AbbyRosenthal/calendar-planner"
        },
        {
            name: "What's the Weather",
            description: "A weather app to call the forecast for U.S. cities.  First project using API calls. ",
            image: "weather.png",
            deployedLink: "https://abbyrosenthal.github.io/whats-the-weather/",
            repo: "https://github.com/AbbyRosenthal/whats-the-weather"
        },
        {
            name: "Social Media API",
            description: "A backend project for a social media API that includes routes to create/delete a user, add friends and comments.",
            image: "",
            deployedLink: "",
            repo: "https://github.com/AbbyRosenthal/social-media-API"
        },
        {
            name: "My First Bio",
            description: "A project developed early on in the bootcamp process to display my bio and current working projects.",
            image: "abbybio.png",
            deployedLink: "https://abbyrosenthal.github.io/abby-bio/",
            repo: "https://github.com/AbbyRosenthal/abby-bio"
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